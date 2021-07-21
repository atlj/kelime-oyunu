import { Game } from "@typings/logic";
import React, { createContext, PropsWithChildren, useState } from "react";

export type GameContextType = {
    gameData: Game;
    setGameData: React.Dispatch<React.SetStateAction<Game>>;
};

const GameContext = createContext<GameContextType>(null);

// eslint-disable-next-line @typescript-eslint/ban-types
const GameContextProvider: React.FC = ({ children }: PropsWithChildren<{}>) => {
    const [gameData, setGameData] = useState<Game>();
    return (
        <GameContext.Provider value={{ gameData, setGameData }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameContextProvider };
