import React from "react";

export const Container: React.FC = ({ children = null }) => {
    return <div className="min-h-screen flex flex-col">{children}</div>;
};
