var avo = require ('../avo.js')
var assert = require ('assert')

describe('The avo function', function(){

  it('should split the string', function(){
    var string = ("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.")
    var stringSplit = string.split(',')
  });


  it('should loop through the new string', function(){
    var newString = function(newDeal) {
      for(var i =0; i < stringSplit.length; i++){
        var deal = stringSplit[i]
      }
    }

  });
});
