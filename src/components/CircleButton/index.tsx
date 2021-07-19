import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const CircleButton: React.FC<IButton> = ({
    className = "",
    children,
    onClick,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                styles.button,
                `rounded-full w-14 h-14 bg-white justify-center items-center flex hover:no ${className}`,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
