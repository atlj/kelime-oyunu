import React from "react";
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
                "rounded-md border-2 border-black md:rounded-2xl w-10 h-10 md:w-14 md:h-14 justify-center items-center bg-white flex hover:shadow-none",
                className,
            )}
            data-testid="rectangle-button"
        >
            <div
                data-testid="button-text"
                className={cn("font-sans font-extrabold text-lg md:text-2xl")}
            >
                {letter !== null ? letter : "_"}
            </div>
            {children}
        </div>
    );
};
