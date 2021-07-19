import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import TextAreaResize from "react-textarea-autosize";

type Props = {
    className?: string;
    placeholder: string;
    minRows?: number;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
};

export const TextInput: React.FC<Props> = ({
    className = "",
    placeholder = "",
    minRows = 4,
    onChange,
    value,
}) => {
    return (
        <TextAreaResize
            value={value}
            placeholder={placeholder}
            minRows={minRows}
            onChange={onChange}
            className={cn(
                styles.label,
                "font-sans text-left rounded-2xl p-3 bg-white font-medium w-80  text-xl  table ",
                className,
            )}
        ></TextAreaResize>
    );
};
