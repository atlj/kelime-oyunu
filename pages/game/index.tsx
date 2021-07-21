import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGameContext } from "@utils/hooks";

const Game: React.FC = () => {
    const router = useRouter();
    const gameContext = useGameContext();
    useEffect(() => {
        if (gameContext.gameData === undefined) {
            router.push("/");
        }
    }, []);
    return <div>WIP</div>;
};

export default Game;
