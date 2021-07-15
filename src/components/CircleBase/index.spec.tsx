import { render } from "@test";

import { CircleBase } from "./index";

describe("Button component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<CircleBase />);

        expect(component).toBeTruthy();
    });
});
