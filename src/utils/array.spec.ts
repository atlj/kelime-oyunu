import { swapArray } from "./array";

describe("SwapArray function", () => {
    it("swaps two values with given index", () => {
        const mockArray = ["a", "b"];
        const swapped = swapArray(mockArray, 0, 1);
        expect(swapped[0]).toBe("b");
        expect(swapped[1]).toBe("a");
    });
});
