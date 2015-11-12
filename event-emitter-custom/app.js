var Emitter = require('./emitter'),
    event = require('./config').events;

var emtr = new Emitter();

emtr.on(event.GREET, function() {
   console.log('Somewhere, someone said hello.');
});

emtr.on(event.GREET, function() {
   console.log('Another greeting occurred!');
});

console.log('Hello There!');

emtr.emit(event.GREET);