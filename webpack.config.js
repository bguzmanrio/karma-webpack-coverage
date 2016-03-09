module.exports = (function(){
  
  return {
        entry: {
          entr1: './js/entryPoints/entr1.js',
          entr2: './js/entryPoints/entr2.js'
        },
        output: {
          path: './dist/',
          filename: 'js/[name].min.js'
        },
        resolve: {
          alias: {
            components: __dirname + '/js/components'
          },
          extensions: ['', '.js', '.sass']
        },
        
        stats: {
          colors: true
        }
    };
  
})();