import { validateGame } from "./validate";

describe("Validate game function", () => {
    it("returns true if object is valid", () => {
        const mockObject = {
            name: "game",
            questions: [{ question: "test", answer: "test" }],
            time: 31,
        };
        expect(validateGame(mockObject)).toBe(true);
    });

    it("returns false if not given an object", () => {
        const mock = 30;
        expect(validateGame(mock)).toBe(false);
    });

    it("returns false if name key is missing or is not a string", () => {
        const withoutName = {
            questions: [{ question: "test", answer: "test" }],
            time: 31,
        };
        const wrongTypeName = {
            name: 21,
            questions: [{ question: "test", answer: "test" }],
            time: 31,
        };

        expect(validateGame(withoutName)).toBe(false);
        expect(validateGame(wrongTypeName)).toBe(false);
    });

    it("returns false if time key is missing or is not a number", () => {
        const withoutTime = {
            name: "game",
            questions: [{ question: "test", answer: "test" }],
        };
        const wrongTypeTime = {
            name: "game",
            questions: [{ question: "test", answer: "test" }],
            time: "test",
        };

        expect(validateGame(withoutTime)).toBe(false);
        expect(validateGame(wrongTypeTime)).toBe(false);
    });

    it("returns false if questions are not valid", () => {
        const mockObject = {
            name: "game",
            questions: [{ questi: "test", answer: "test" }],
            time: 31,
        };

        expect(validateGame(mockObject)).toBe(false);
    });
});
