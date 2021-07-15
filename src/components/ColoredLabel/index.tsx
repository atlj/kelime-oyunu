import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { textClassName?: string; text: string; subText: string };

export const ColoredLabel: React.FC<IButton> = ({
    className = "",
    textClassName = "",
    text = "",
    subText = "",
    children = null,
    onClick,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                styles.label,
                "rounded-2xl p-6 flex-col bg-white flex hover:shadow-none",
                className,
            )}
            {...rest}
            data-testid="colored-label"
        >
            <div
                data-testid="button-text"
                className={cn(
                    "font-sans font-extrabold text-3xl mb-2 ",
                    textClassName,
                )}
            >
                {text}
            </div>
            <div
                data-testid="button-subText"
                className={cn(
                    "font-sans font-bold text-base text-left mb-4 ",
                    textClassName,
                )}
            >
                {subText}
            </div>
            {children}
        </button>
    );
};
