import React from "react";
import { GameContext, GameContextType } from "./context";

const useGameContext = (): GameContextType => {
    return React.useContext(GameContext);
};

export { useGameContext };
