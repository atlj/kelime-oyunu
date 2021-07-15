import { render, screen } from "@test";

import { LetterBox } from "./index";

describe("Letter Box", () => {
    it("renders without crashing", () => {
        const component = render(<LetterBox letter={null} />);

        expect(component).toBeTruthy();
    });
    it("displays text", () => {
        const mockText = "test";
        render(<LetterBox letter={mockText} />);

        expect(screen.getByText(mockText)).toBeDefined();
    });
    it("displays underscore", () => {
        render(<LetterBox letter={null} />);

        expect(screen.getByText("_")).toBeDefined();
    });
});
