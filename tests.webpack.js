//Spec files
var context = require.context('./js', true, /\.spec.js$/); 

//JS files. Entry points must not be included
var sources = require.context('./js/components', true, /[^.][^s][^p][^e][^c]\.js$/);

context.keys().forEach(context);
sources.keys().forEach(sources);