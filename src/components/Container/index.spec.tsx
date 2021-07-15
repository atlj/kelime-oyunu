import { render } from "@test";

import { Container } from "./index";

describe("Wrapper", () => {
    const component = render(<Container />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
