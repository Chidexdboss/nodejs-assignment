//events: To handle events
//Make an event listener for an event called "scream", then provoke the event:
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');
