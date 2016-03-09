var maths = require('components/mathOp/main');

describe('TEST #1', function(){
  
  it('Should add 2 numbers', function(){
    expect(maths.sum(1,3)).toBe(4);
  })
})