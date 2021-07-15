import { fireEvent, render, screen } from "@test";

import { ColoredLabel } from "./index";

describe("Colored Label", () => {
    it("renders without crashing", () => {
        const component = render(
            <ColoredLabel subText="" text="" onClick={() => undefined} />,
        );

        expect(component).toBeTruthy();
    });

    it("is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(
            <ColoredLabel subText="" text="" onClick={mockFn} />,
        );

        const btn = getByTestId("colored-label");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it("displays text", () => {
        const mockText = "test";
        render(
            <ColoredLabel
                subText=""
                text={mockText}
                onClick={() => undefined}
            />,
        );

        expect(screen.getByText(mockText)).toBeDefined();
    });
    it("displays subText", () => {
        const mockText = "test";
        render(
            <ColoredLabel
                subText={mockText}
                text=""
                onClick={() => undefined}
            />,
        );

        expect(screen.getByText(mockText)).toBeDefined();
    });
    it("displays children", () => {
        const mockChild = <div data-testid="mockChild" />;
        render(
            <ColoredLabel subText="" text="" onClick={() => undefined}>
                {mockChild}
            </ColoredLabel>,
        );

        expect(screen.getByTestId("mockChild")).toBeTruthy();
    });
});
