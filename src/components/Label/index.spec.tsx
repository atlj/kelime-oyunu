import { render, screen } from "@test";

import { Label } from "./index";

describe("Label", () => {
    it("renders without crashing", () => {
        const component = render(<Label text="" />);

        expect(component).toBeTruthy();
    });
    it("displays text", () => {
        const mockText = "test";
        render(<Label text={mockText} />);

        expect(screen.getByText(mockText)).toBeDefined();
    });
    it("displays children", () => {
        const mockChild = <div data-testid="mockChild" />;
        render(<Label text="">{mockChild}</Label>);

        expect(screen.getByTestId("mockChild")).toBeTruthy();
    });
});
