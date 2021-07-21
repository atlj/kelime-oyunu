import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGameContext } from "@utils/hooks";
import {
    CircleBase,
    Label,
    RectangleButton,
    LetterBox,
    Container,
} from "@components";
import { Question } from "@typings/logic";

import * as Icons from "@icons";

const Game: React.FC = () => {
    const router = useRouter();
    const gameContext = useGameContext();

    //Route to mainpage if there is not a game object in context
    useEffect(() => {
        if (gameContext.gameData === undefined) {
            router.push("/");
        }
    }, []);

    const [remainingTime, setRemainingTime] = useState<number>(
        gameContext.gameData ? gameContext.gameData.time : null,
    );
    const [points, setPoints] = useState(0);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const currentQuestion = React.useMemo<Question | null>(
        () =>
            gameContext.gameData
                ? gameContext.gameData.questions[questionIndex]
                : null,
        [questionIndex],
    );

    const [answer, setAnswer] = useState<Array<string | null>>(
        currentQuestion?.answer.split("").map(() => null),
    );

    //Make answer array each time question changes
    useEffect(() => {
        setAnswer(currentQuestion.answer.split("").map(() => null));
    }, [currentQuestion]);

    //Timer
    useEffect(() => {
        if (remainingTime === 0) {
            //Implement time out
        }
        const timer = setTimeout(() => {
            setRemainingTime(remainingTime - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [remainingTime]);

    return (
        <Container className="pr-6 pl-6 md:pr-20 md:pl-20items-center justify-around">
            <div className="justify-between w-full flex-row flex ">
                <CircleBase className="font-sans items-center justify-center font-extrabold text-lg md:text-xl ">
                    {points}
                </CircleBase>
                <CircleBase className="font-sans items-center justify-center font-extrabold text-lg md:text-xl ">
                    {remainingTime}
                </CircleBase>
            </div>
            <Label text={currentQuestion?.question}></Label>
            <div className="flex-row flex items-center flex-wrap justify-center w-full ">
                {answer?.map((letter) => {
                    return (
                        <LetterBox
                            className="mr-0.5 ml-0.5 md:mr-1.5 md:ml-1.5 mb-2 "
                            letter={letter ? letter.toUpperCase() : null}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center ">
                <RectangleButton
                    onClick={() => {
                        //Get the indices of hidden letters
                        const hiddenLetterIndices: number[] = [];
                        answer.forEach((letter, index) => {
                            if (letter === null) {
                                hiddenLetterIndices.push(index);
                            }
                        });

                        if (hiddenLetterIndices.length < 1) {
                            return false;
                        }

                        //Pick a random index from hidden letter indices
                        const chosenIndex =
                            hiddenLetterIndices[
                                Math.floor(
                                    Math.random() * hiddenLetterIndices.length,
                                )
                            ];

                        const copyAnswer = [...answer];
                        copyAnswer[chosenIndex] =
                            currentQuestion.answer.split("")[chosenIndex];
                        setAnswer(copyAnswer);
                    }}
                    className="md:mr-5 mb-5 md:mb-0 "
                    variant="primary"
                    text="Harf Al"
                ></RectangleButton>
                <RectangleButton
                    onClick={() => {
                        if (
                            gameContext.gameData.questions.length - 1 >
                            questionIndex
                        ) {
                            const answerCopy: Array<string | number | null> = [
                                ...answer,
                            ];

                            //This is why i use javascipt
                            setPoints(
                                points +
                                    answerCopy
                                        .map((value): number =>
                                            value === null ? 100 : 0,
                                        )
                                        .reduce(
                                            (previous, current) =>
                                                previous + current,
                                        ),
                            );
                            setQuestionIndex(questionIndex + 1);
                        } else {
                            //Implement score screen
                        }
                    }}
                    variant="secondary"
                    text="Sonraki"
                >
                    <Icons.ChevronRight color="white" className="w-7 h-7" />
                </RectangleButton>
            </div>
        </Container>
    );
};

export default Game;
