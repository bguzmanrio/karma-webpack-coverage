var sortingMethods = require('components/sortingMethods/main');

describe('Sorting methods test', function(){
  var originalList;
  var sortedOriginalList;
  var bigArrayGenerated = [ 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000 ];
  var bigArrayGeneratedByDefault = [ 
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
    200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000
  ];
  
  beforeEach( function(){
    originalList = [4,7,6,45,56,2435,38,234,765,2348,9798,0];
    sortedOriginalList = [0,4,6,7,38,45,56,234,765,2348,2435,9798];
  } )
  
  
  it('Insertion sort test', function(){
    var sortedList = sortingMethods.insertionSort( originalList );
    expect( sortedList ).toEqual( sortedOriginalList );
  });
  
  it('Selection sort test', function(){
    var sortedList = sortingMethods.selectionSort( originalList );
    expect( sortedList ).toEqual( sortedOriginalList );
  });
  
  it('Quick sort test', function(){
    var sortedList = sortingMethods.quickSort( originalList );
    expect( sortedList ).toEqual( sortedOriginalList );
  });
  
  it('Should generate a n position array of random numbers ', function(){
    spyOn(Math, ['random']).and.returnValue(2);
    var bigArray = sortingMethods.bigArrayGenerator( 10 );
    var bigArrayDefault = sortingMethods.bigArrayGenerator();
    expect( bigArray ).toEqual( bigArrayGenerated );
    expect( bigArrayDefault ).toEqual( bigArrayGeneratedByDefault );
  });
  
  
  
});