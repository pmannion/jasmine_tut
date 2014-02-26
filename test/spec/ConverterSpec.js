describe("My Converter", function(){
    it("should convert imperial weight to metric", function(){
      expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);
    });

    it("Should be able to deal with strings", function(){
       expect(function(){
           Converter.convertFromImperialToMetric("howya")}).toThrow(new Error("Not a number"));
       })
});