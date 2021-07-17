import { screen, render } from "@testing-library/react";
import Home from "@pages/index";

describe("Landing page", () => {
    it("Renders Label", () => {
        render(<Home />);
        expect(screen.getByText("Kelime Oyunu")).toBeTruthy();
    });

    it("Renders Upload Button", () => {
        render(<Home />);
        expect(screen.getByText("Dosya Yükle")).toBeTruthy();
    });

    it("Renders Create button", () => {
        render(<Home />);
        expect(screen.getByText("Yeni Oyun Oluştur")).toBeTruthy();
    });

    it("Renders bottom link", () => {
        render(<Home />);
        expect(screen.getByTestId("bottomlink")).toBeTruthy();
    });
});
