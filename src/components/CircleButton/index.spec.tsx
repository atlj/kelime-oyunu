import { fireEvent, render } from "@test";

import { CircleButton } from "./index";

describe("Button component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<CircleButton onClick={() => undefined} />);

        expect(component).toBeTruthy();
    });

    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<CircleButton onClick={mockFn} />);

        const btn = getByTestId("circle-button");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
