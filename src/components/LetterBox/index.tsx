import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { letter: string | null };

export const LetterBox: React.FC<IButton> = ({
    className = "",
    letter = null,
    children = null,
}) => {
    return (
        <div
            className={cn(
                styles.label,
                "rounded-md md:rounded-2xl w-8 h-8 md:w-14 md:h-14 justify-center items-center bg-white flex hover:shadow-none",
                className,
            )}
            data-testid="rectangle-button"
        >
            <div
                data-testid="button-text"
                className={cn("font-sans font-bold text-xl md:text-3xl")}
            >
                {letter !== null ? letter : "_"}
            </div>
            {children}
        </div>
    );
};
