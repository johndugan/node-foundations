// include our small module that exists in a
// single "small-module.js" file.
var smallModule = require('./small-module');

// include our large module that exists in many
// files within the "mega-module" directory.
var megaModule = require('./mega-module');

/*
    ES6
    import smallModule from './small-module';
    import megaModule from './mega-module';
 */

smallModule();

console.log(megaModule.add(2,2));
console.log(megaModule.subtract(10,5));
console.log(megaModule.multiply(4,4));
