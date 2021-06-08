import { getPercents } from "../utils/getpercents.js";

describe("test for get percent of number", () =>{
it("get 30 percents of 200 will be 60", () =>{
const result = getPercents(30,200);
expect(result).toBe(60);
}),

it("get 40 percents of 500 will be 200", () =>{
    const result = getPercents(40,500);
    expect(result).toBe(200);
    }),

    it("get 20 percents of 300 will be 60", () =>{
        const result = getPercents(20,300);
        expect(result).toBe(60);
        });

});
