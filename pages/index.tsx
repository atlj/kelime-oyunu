import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Container,
    CircleButton,
    CircleBase,
    Label,
    ColoredLabel,
} from "@components";
import * as Icons from "@icons";
import { useDropzone } from "react-dropzone";
import { Game } from "@typings/logic";
import { validateGame } from "@utils/validate";

const Home: React.FC = () => {
    const onDrop = useCallback(
        async (acceptedFiles: File[] | undefined, _, event) => {
            if (acceptedFiles !== undefined && acceptedFiles.length > 0) {
                const textData = await acceptedFiles[0].text();
                const game: Game = JSON.parse(textData);
                if (!validateGame(game)) {
                    alert("Please upload a valid file");
                } else {
                    //TODO Start Game
                }
            } else {
                alert("Please upload a valid file");
            }
        },
        [],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        preventDropOnDocument: true,
        accept: "application/json",
    });

    return (
        <Container className="pr-6 pl-6 pt-6 items-center md:justify-around ">
            <Label
                className="md:pr-12 md:pl-12 md:pb-6 md:pt-6 "
                textClassName="font-bold text-4xl md:text-5xl "
                text="Kelime Oyunu"
            />
            <div className="mt-7 md:flex-row md:flex items-center justify-center ">
                <ColoredLabel
                    {...getRootProps()}
                    className="bg-softGreen "
                    text="Dosya Yükle"
                    subText="Oyunu başlatmak için dosya yükle"
                >
                    <>
                        <div
                            style={{
                                backgroundColor: "red",
                            }}
                        >
                            <input
                                style={{
                                    flex: 1,
                                    position: "absolute",
                                }}
                                {...getInputProps()}
                            />
                        </div>
                        <CircleBase>
                            <Icons.Navigation
                                className="w-7 h-7  "
                                color="black"
                            />
                        </CircleBase>
                    </>
                </ColoredLabel>
                <Link href="/create">
                    <ColoredLabel
                        className="bg-softYellow mt-7 md:mt-0 md:ml-16  "
                        text="Yeni Oyun Oluştur"
                        subText="Yeni bir oyun hazırla ve kaydet"
                    >
                        <CircleBase>
                            <Icons.Plus className="w-7 h-7  " color="black" />
                        </CircleBase>
                    </ColoredLabel>
                </Link>
            </div>
            <a
                href="https://github.com/atlj"
                target="_blank"
                className="self-center md:mt-0 mt-7 "
                data-testid="bottomlink"
            >
                <CircleButton>
                    <Image width={58} height={58} src="/res/atljicon.png" />
                </CircleButton>
            </a>
        </Container>
    );
};

export default Home;
