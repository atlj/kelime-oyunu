import React, { useState } from "react";
import { Container, CircleBase, TextInput, CircleButton } from "@components";
import * as Icons from "@icons";
import { Game, Question } from "@typings/logic";
import { swapArray } from "@utils/array";
import { saveAs } from "@progress/kendo-file-saver";

const Create: React.FC = () => {
    const [time, setTime] = useState<number>();
    const [questions, setQuestions] = useState<Question[]>([
        { question: undefined, answer: undefined },
    ]);

    const saveGame = () => {
        const game: Game = { name: "game", questions, time };
        const contenttosave = "data:text/plain," + JSON.stringify(game);
        saveAs(contenttosave, `${game.name}.json`);
    };

    return (
        <Container className="items-center">
            <div className="w-80 items-center flex-col flex ">
                <CircleBase className="mt-6 mb-6">
                    <input
                        onChange={(event) => {
                            setTime(Number.parseInt(event.currentTarget.value));
                        }}
                        type="number"
                        className="font-medium font-sans text-xl w-full rounded-full text-center "
                        placeholder="Süre"
                        data-testid="timeinput"
                    />
                </CircleBase>
                {questions.map((question, index) => (
                    <>
                        <TextInput
                            className="mb-8"
                            placeholder="Soruyu girin"
                            value={question.question}
                            onChange={(event) => {
                                //this is not the most performant method to this but im not a good dev either
                                const questionsCopy = [...questions];
                                questionsCopy[index].question =
                                    event.currentTarget.value;
                                setQuestions(questionsCopy);
                            }}
                        />
                        <TextInput
                            data-testid="answerinput"
                            className="mb-6"
                            minRows={1}
                            value={question.answer}
                            placeholder="Cevabı girin"
                            onChange={(event) => {
                                const questionsCopy = [...questions];
                                questionsCopy[index].answer =
                                    event.currentTarget.value;
                                setQuestions(questionsCopy);
                            }}
                        />
                        <div className="flex w-full justify-between mb-6 ">
                            <div className="self-start flex">
                                {index === questions.length - 1 ? (
                                    <CircleButton
                                        data-testid="plusbutton"
                                        onClick={() => {
                                            //New Question
                                            if (
                                                question.question !==
                                                    undefined &&
                                                question.answer !== undefined
                                            ) {
                                                setQuestions([
                                                    ...questions,
                                                    {
                                                        answer: undefined,
                                                        question: undefined,
                                                    },
                                                ]);
                                            }
                                        }}
                                        className="mr-2"
                                    >
                                        <Icons.Plus className="w-7 h-7" />
                                    </CircleButton>
                                ) : null}
                                {index === questions.length - 1 ? (
                                    <CircleButton
                                        onClick={() => {
                                            //Download Questions

                                            let noUndefined = true;

                                            questions.forEach((question) => {
                                                if (
                                                    question.answer ===
                                                        undefined ||
                                                    question.question ===
                                                        undefined
                                                ) {
                                                    noUndefined = false;
                                                }
                                            });

                                            if (
                                                noUndefined &&
                                                time !== undefined
                                            ) {
                                                saveGame();
                                            }
                                        }}
                                    >
                                        <Icons.Save className="w-7 h-7" />
                                    </CircleButton>
                                ) : null}
                            </div>
                            <div className="self-end flex">
                                {index !== 0 ? (
                                    <CircleButton
                                        onClick={() => {
                                            if (
                                                question.answer !== undefined &&
                                                question.question !== undefined
                                            ) {
                                                let questionsCopy = [
                                                    ...questions,
                                                ];
                                                questionsCopy = swapArray(
                                                    questionsCopy,
                                                    index,
                                                    index - 1,
                                                );
                                                setQuestions(questionsCopy);
                                            }
                                        }}
                                        className="mr-2"
                                    >
                                        <Icons.ArrowUp className="w-7 h-7" />
                                    </CircleButton>
                                ) : null}
                                {index !== questions.length - 1 ? (
                                    <CircleButton
                                        data-testid="arrowdown"
                                        onClick={() => {
                                            if (
                                                questions[index + 1]
                                                    .question !== undefined &&
                                                questions[index + 1].answer !==
                                                    undefined
                                            ) {
                                                let questionsCopy = [
                                                    ...questions,
                                                ];
                                                questionsCopy = swapArray(
                                                    questionsCopy,
                                                    index,
                                                    index + 1,
                                                );
                                                setQuestions(questionsCopy);
                                            }
                                        }}
                                    >
                                        <Icons.ArrowBottom className="w-7 h-7" />
                                    </CircleButton>
                                ) : null}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </Container>
    );
};

export default Create;
