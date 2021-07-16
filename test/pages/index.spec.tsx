import { render } from "../index";

import { default as Home } from "../../pages/index";

describe("Landing Page", () => {
    it("renders without crashing", () => {
        const Page = render(<Home />);
        expect(Page).toBeTruthy();
    });
});

describe("Landing Page Components", () => {
    const { getByTestId, findByText } = render(<Home />);
    it("Renders label", () => {
        expect(findByText("Kelime")).toBeDefined(); //TODO add language implementation
    });
    it("Renders Upload File label", () => {
        expect(findByText("Dosya")).toBeDefined(); //TODO add language implementation
    });
    it("Renders New Game label", () => {
        expect(findByText("Yeni")).toBeDefined(); //TODO add language implementation
    });
    // it("Renders bottom Logo", async () => {
    //     expect(await getByTestId("bottomlink")).toBeDefined();
    // });
});
