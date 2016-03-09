var stringTransforms = require('components/stringTransformation/main');

describe('String transformation tests', function(){
  
  var baseWord = 'hola';
  var capitalizedWord = 'Hola';
  var reversedWord = 'aloh';
  
  it('Should capitalize the word', function(){
    expect( stringTransforms.capitalize( baseWord ) ).toBe( capitalizedWord );
    expect( stringTransforms.capitalize( '' ) ).toBe( '' );
  });
  
  it('Should reverse the word', function(){
    expect( stringTransforms.reverse( baseWord ) ).toBe( reversedWord );
  });
});
