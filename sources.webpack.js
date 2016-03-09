var context = require.context('./js/entryPoints', true, /\.js$/g); //make sure you have your directory and regex test set correctly!
console.log('this is context.keys()', context.keys());
context.keys().forEach(context);