import { screen, render, fireEvent } from "@testing-library/react";
import Create from "@pages/create/index";

describe("Create page", () => {
    describe("Plus button", () => {
        beforeEach(() => {
            render(<Create />);
        });
        it("doesn't add a new question if question is undefined", () => {
            fireEvent.click(screen.getByTestId("plusbutton"));
            expect(screen.getAllByPlaceholderText("Soruyu girin").length).toBe(
                1,
            );
        });

        it("adds a new question if question is defined", () => {
            fireEvent.change(screen.getByPlaceholderText("Soruyu girin"), {
                target: { value: "test" },
            });
            fireEvent.change(screen.getByPlaceholderText("Cevabı girin"), {
                target: { value: "test" },
            });
            fireEvent.click(screen.getByTestId("plusbutton"));
            expect(screen.getAllByPlaceholderText("Soruyu girin").length).toBe(
                2,
            );
        });
    });
});
