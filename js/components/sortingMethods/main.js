module.exports = (function(){
  
  var insertionSort = function( list ){
    var currentItem;
    var j;
    for( var i = 1; i<list.length; i++ ){
      currentItem = list[i];
      j = i - 1;
      while(j >= 0 && list[j] > currentItem ){
        list[j+1] = list[j];
        j--;
      }
      list[j+1] = currentItem;
    }
    return list;
  };
  
  var selectionSort = function( list ){
    
    var minEl;
    for(var i = 0; i<list.length; i++){
      minEl = i;
      for(var j = i+1; j<list.length; j++){
        if( list[j] < list[minEl] ){
          minEl = j;
        }
      }
      if(minEl !== i){
        list = exchange(list, i, minEl);
      }
    }
    return list;
  };
  
  var exchange = function( list, p1, p2 ){
    var aux = list[p1];
    list[p1] = list[p2];
    list[p2] = aux;
    return list;
  };
  
  var median = function( a, b, c ){
    var aa = [a,b,c];
    aa.sort(function(a,b){return a-b});
    return aa[1];
  };
  
  var quickSort = function( list ){
    var middleItem = list[Math.floor((list.length-1)/2)];
    var firstItem = list[0];
    var lastItem = list[list.length - 1];
    var pivot = median( firstItem, middleItem, lastItem );
    var pivotPosition = list.indexOf(pivot);
    var lower = [];
    var greater = [];
    
    list.splice(pivotPosition, 1);
    
    
    for(var i = 0, j = list.length - 1; i<list.length; i++){
      if( list[i] < pivot ){
        lower.push( list[i]);
      }else{
        greater.push( list[i] );
      }
    }
    if(lower.length > 0){ lower = quickSort( lower ) }
    if(greater.length > 0){ greater = quickSort( greater ) }
    
    return lower.concat([pivot]).concat(greater);
  };
  
  var bigArrayGenerator = function( positions ){
    var arr = [];
    for(var i = 0; i<(positions || 100); i++){
      arr.push(parseInt(Math.random()*10000*(positions || 10)));
    }
    return arr;
  };
  
  return {
    insertionSort: insertionSort,
    selectionSort: selectionSort,
    bigArrayGenerator: bigArrayGenerator,
    quickSort: quickSort
  }
  
})();