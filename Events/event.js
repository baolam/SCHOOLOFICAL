const events = require("events");
const EventEmitter = new events.EventEmitter();

EventEmitter.setMaxListeners(50);

module.exports = EventEmitter;