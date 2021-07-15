import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const CircleBase: React.FC<IButton> = ({ className = "", children }) => {
    return (
        <div
            className={cn(
                styles.button,
                `rounded-full w-14 h-14 bg-white justify-center items-center flex hover:no ${className}`,
            )}
            data-testid="circle-base"
        >
            {children}
        </div>
    );
};
