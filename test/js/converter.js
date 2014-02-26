var Converter = (function(){
    //private stuff

    var converterValue = 2.2;
    return{
        convertFromImperialToMetric: function(weight){
          var num = parseInt(weight);
            if (isNaN(num) == true){
                throw new Error ("not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight){
           return weight / converterValue;
        },

        checkIsPositiveNumber: function(number){
            var number = parseInt(number);
            if (number < 0){
                throw new Error ("not a positive number");
            }
        }
    }
}());