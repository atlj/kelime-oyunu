import { render, fireEvent } from "@test";
import React from "react";

import { TextInput } from "./index";

describe("Text Area", () => {
    it("renders without crashing", () => {
        const component = render(
            <TextInput onChange={() => undefined} placeholder="" />,
        );

        expect(component).toBeTruthy();
    });

    it("Handles the value", async () => {
        let testValue: string;
        const { findByTestId } = render(
            <TextInput
                onChange={(e) => {
                    testValue = e.target.value;
                }}
                placeholder=""
            />,
        );
        const textarea = await findByTestId("textarea");
        fireEvent.change(textarea, { target: { value: "Just Testing" } });
        console.log(testValue);

        expect(testValue).toBe("Just Testing");
    });
});
