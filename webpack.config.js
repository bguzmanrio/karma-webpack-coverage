module.exports = (function(){
  
  return {
        entry: {
          lmn: './js/entryPoints/lmn.js',
          rmb: './js/entryPoints/rmb.js'
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