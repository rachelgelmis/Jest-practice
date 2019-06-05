describe ("testing var keyword", () => {
    const hwTest = require("../../index");
    it("should have access to variable inside child function", () => { //'it' is an alias for test
        var actual = hwTest()
        expect(actual).toEqual("hello world: universe");
    })


    
})