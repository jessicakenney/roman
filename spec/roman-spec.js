var Roman = require('./../js/roman.js').romanModule;

describe('Roman', function(){
  var roman;
  beforeEach(function(){
    roman = new Roman("blue");
  });
  it('should test whether can instantiate roman object', function(){
    expect(roman.color).toEqual("blue")
  });

  it('should test whether can replace with roman symbol at thousandth place', function(){
    expect(roman.thouPlace("1")).toEqual("M");
  });

  it('should test whether can replace with roman symbol at hundredth place', function(){
    expect(roman.hunPlace("1")).toEqual("C");
  });

  it('should test whether can replace with roman symbol at tenth place', function(){
    expect(roman.tenPlace("1")).toEqual("X");
  });

  it('should test whether can replace with roman symbol at ones place', function(){
    expect(roman.onePlace("1")).toEqual("I");
  });
  it('should return null if input is out of range', function(){
    expect(roman.toRoman("4500")).toEqual("Invalid number, try again");
  });
  it('should apply thouPlace, hunPlace, tenPlace, and onePlace to yield correct roman numeral', function(){
    
  expect(roman.toRoman("2500")).toEqual("MMD");
  });

});
