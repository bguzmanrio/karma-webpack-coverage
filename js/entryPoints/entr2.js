var maths = require('components/mathOp/main');
var sortingMethods = require('components/sortingMethods/main');
var stringTransforms = require('components/stringTransformation/main');

(function(){
  
  var methods = {
    quickSort: sortingMethods.quickSort,
    insertion: sortingMethods.insertionSort,
    selection: sortingMethods.selectionSort
  }
  
  var getArray = function(){
    return sortingMethods.bigArrayGenerator( 100000 );
  };
  
  var measureTime = function( method ){
    var methodToApply = methods[method];
    var array = getArray();
    var startTime = Date.now();
    var sortedArray = methodToApply( array );
    var endTime = Date.now();
    
    console.log( stringTransforms.capitalize('Elapsed time: ') , ( endTime - startTime )/ 1000 );
  };
  
  var init = function(){
    measureTime('insertion');
    measureTime('selection');
    measureTime('quickSort');
  };
  
  init();
  
})();