import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { textClassName?: string; text: string };

export const Label: React.FC<IButton> = ({
    className = "",
    textClassName = "",
    text = "",
    children = null,
}) => {
    return (
        <div
            className={cn(
                styles.label,
                "rounded-2xl justify-center items-center p-5 bg-white flex hover:shadow-none",
                className,
            )}
            data-testid="rectangle-button"
        >
            <div
                data-testid="button-text"
                className={cn(
                    "font-sans font-extrabold text-xl md:text-2xl",
                    textClassName,
                )}
            >
                {text}
            </div>
            {children}
        </div>
    );
};
