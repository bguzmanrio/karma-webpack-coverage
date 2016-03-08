

module.exports = (function(){
  
  var sum = function( a, b ){
    return a + b;
  };
  
  var subtract = function( a, b ){
    return a - b;
  };
  
  var mult = function( a, b ){
    return a * b;
  };
  
  var div = function( a, b ){
    if( a > b ){
      return a/b;
    }else{
      return b/a;
    }
  };
  
  var factorial = function( n ){
    if( n > 0 ){
      return n * factorial(n - 1);
    }else{
      return 1;
    }
  };
  
  var nChooseK = function( n, k ){
    return factorial(n) / (factorial( k ) * factorial( n - k ))
  };
  
  var summatory = function( from, to, f ){
    var accum = from <= to ? f( from, to ) + summatory2( from+1, to, f ) : 0;
    return accum;
  };
  
  return {
    sum: sum,
    subtract: subtract,
    mult: mult,
    div: div,
    factorial: factorial,
    nChooseK: nChooseK,
    summatory: summatory
  };
  
})();