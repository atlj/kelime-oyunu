import { fireEvent, render, screen } from "@test";

import { RectangleButton } from "./index";

describe("Rectangle button", () => {
    it("renders without crashing", () => {
        const component = render(
            <RectangleButton
                text=""
                variant="primary"
                onClick={() => undefined}
            />,
        );

        expect(component).toBeTruthy();
    });

    it("is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(
            <RectangleButton text="" variant="primary" onClick={mockFn} />,
        );

        const btn = getByTestId("rectangle-button");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it("displays text", () => {
        const mockText = "test";
        render(
            <RectangleButton
                text={mockText}
                variant="primary"
                onClick={() => undefined}
            />,
        );

        expect(screen.getByText(mockText)).toBeDefined();
    });
    it("displays children", () => {
        const mockChild = <div data-testid="mockChild" />;
        render(
            <RectangleButton
                text=""
                variant="primary"
                onClick={() => undefined}
            >
                {mockChild}
            </RectangleButton>,
        );

        expect(screen.getByTestId("mockChild")).toBeTruthy();
    });
});
