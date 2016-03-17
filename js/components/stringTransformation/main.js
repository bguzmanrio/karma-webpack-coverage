module.exports = (function(){
  
  var capitalize = function( str ){
    var firstChar;
    if( str ){
      firstChar = str.charAt(0).toUpperCase();
      str = firstChar + str.substr(1, str.length);
    }
    return str;
  };
  
  var reverse = function( str ){
    var splitted = str.split('');
    return splitted.reverse().join('');
  };
  
  return {
    capitalize: capitalize,
    reverse: reverse
  }
  
})();