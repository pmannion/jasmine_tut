
describe ("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
    it("should be able to deal with strings", function() {
        expect(function()
        {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("not a number"));
    })

    it("should be a valid number", function(){
        expect(function()
        {Converter.checkIsPositiveNumber(-2)}).toThrow(new Error("not a positive number"));
    })
})
