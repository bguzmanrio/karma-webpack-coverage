var context = require.context('./js', true, /\.spec\.js$/); //make sure you have your directory and regex test set correctly!
console.log(context.keys())
context.keys().forEach(context);