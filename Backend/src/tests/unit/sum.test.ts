import Sum from "../../services/depositService.js";
import {describe, expect, it} from "vitest";

describe("Test Sum", () => {
    it("Function for sum.", () => {
        const result = Sum(1,2);
        expect(result).toBe(1 + 2)
    })
})