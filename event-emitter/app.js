// Assign the "events" API to `Emitter`
var Emitter = require('events');

// Assign the `events` object of the object literal
// in ./config.js to `event`.
var event = require('./config').events;

// Instantiate a new `Emitter` object and assign it
// to `emtr`.
var emtr = new Emitter();

// The `on` method of the "events" API takes an event
// name as the first argument and (optionally) data
// in the second argument.
emtr.on(event.GREET, function(name) {
   console.log(`Howdy ${name}!`);
});

emtr.on(event.GREET, function() {
   console.log('Where is your truck?');
});

console.log('Hello There!');

// Trigger the `event.GREET` event and pass the
// string `Bob` as data.
emtr.emit(event.GREET, 'Bob');