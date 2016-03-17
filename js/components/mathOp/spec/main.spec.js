var maths = require('components/mathOp/main');

describe('Math TEST', function(){
  
  it('Should add 2 numbers', function(){
    expect( maths.sum( 1, 3 ) ).toBe( 4 );
  });
  
  it('Should subtract 2 numbers', function(){
    expect( maths.subtract( 5, 4 ) ).toBe( 1 );
    expect( maths.subtract( 4, 5 ) ).toBe( -1 );
  });
  
  it('Should multiply 2 numbers', function(){
    expect( maths.mult( 5, 4 ) ).toBe( 20 );
    expect( maths.mult( -4, 5 ) ).toBe( -20 );
  });
  
  it('Should divide 2 numbers', function(){
    expect( maths.div( 8, 4 ) ).toBe( 2 );
    expect( maths.div( 4, 8 ) ).toBe( 2 );
  });
  
  it('Should get the factorial of a number', function(){
    expect( maths.factorial( 5 ) ).toBe( 120 );
    expect( maths.factorial( 0 ) ).toBe( 1 );
  });
  
  it('Should calculate the binomial number', function(){
    expect( maths.nChooseK( 5, 4 ) ).toBe( 5 );
  });
  
  it('Should calculate the summatory', function(){
    expect( maths.summatory( 0, 5, function( from, to ){
      return from;
    } ) ).toBe( 15 );
    expect( maths.summatory( 0, 5, function( from, to ){
      return from * 2;
    } ) ).toBe( 30 );
  });
  
})