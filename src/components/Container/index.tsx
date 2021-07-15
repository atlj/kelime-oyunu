import React from "react";
import cn from "classnames";

type Props = {
    className: string;
};

export const Container: React.FC<Props> = ({ children = null, className }) => {
    return (
        <div className={cn("min-h-screen flex flex-col", className)}>
            {children}
        </div>
    );
};
