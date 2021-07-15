import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { variant: "primary" | "secondary"; textClassName?: string; text: string };

export const RectangleButton: React.FC<IButton> = ({
    className = "",
    textClassName = "",
    text = "",
    children = null,
    onClick,
    variant,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                styles.button,

                {
                    "rounded-2xl w-80 h-16 justify-center items-center bg-primaryYellow flex hover:shadow-none":
                        variant === "primary",
                    "rounded-2xl w-80 h-16 justify-center items-center bg-primaryBlack flex hover:shadow-none":
                        variant === "secondary",
                },
                className,
            )}
            {...rest}
            data-testid="rectangle-button"
        >
            <div
                data-testid="button-text"
                className={cn(
                    {
                        "font-sans font-extrabold text-2xl":
                            variant === "primary",
                        "font-sans font-bold text-white text-2xl":
                            variant === "secondary",
                    },
                    textClassName,
                )}
            >
                {text}
            </div>
            {children}
        </button>
    );
};
