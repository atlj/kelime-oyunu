import React from "react";
import Image from "next/image";

import {
    Container,
    CircleButton,
    CircleBase,
    Label,
    ColoredLabel,
} from "@components";
import * as Icons from "@icons";

const Home: React.FC = () => {
    return (
        <Container className="pr-6 pl-6 pt-6 items-center md:justify-around ">
            <Label
                className="md:pr-12 md:pl-12 md:pb-6 md:pt-6 "
                textClassName="font-bold text-4xl md:text-5xl "
                text="Kelime Oyunu"
            />
            <div className="mt-7 md:flex-row md:flex items-center justify-center ">
                <ColoredLabel
                    className="bg-softGreen"
                    text="Dosya Yükle"
                    subText="Oyunu başlatmak için dosya yükle"
                >
                    <CircleBase>
                        <Icons.Navigation className="w-7 h-7  " color="black" />
                    </CircleBase>
                </ColoredLabel>
                <ColoredLabel
                    className="bg-softYellow mt-7 md:mt-0 md:ml-16  "
                    text="Yeni Oyun Oluştur"
                    subText="Yeni bir oyun hazırla ve kaydet"
                >
                    <CircleBase>
                        <Icons.Plus className="w-7 h-7  " color="black" />
                    </CircleBase>
                </ColoredLabel>
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
