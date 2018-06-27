import "jest";

import {sumList} from "./sumlist";

describe("summing a list", () => {
    it("should sum a list of values", () => {
        const inputList = [1,2,3];

        const value = sumList(inputList);

        expect(value).toEqual(6);
    }) 
});
