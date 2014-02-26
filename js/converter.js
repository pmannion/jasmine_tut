var Converter = (function(){
    //private stuff

    var ConvertValue = 2.2;
    return{
        convertFromImperialToMetric: function(weight){
          var num = parseInt(weight);
            if(isNaN(num) == true){
                throw new Error ("not a number");
            }
            num = num / convertValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight){

        }
    }
}());