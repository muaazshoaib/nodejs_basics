// ----- 04. Creating a module ----- //

// var url = "http://mylogger.io/log";

// function log(message) {
// Send an HTTP request
//   console.log(message);
// }

// module.exports.log = log;
// module.exports.endPoint = url;

// function log(message) {
// Send an HTTP request
//   console.log(message);
// }

// module.exports = log;

// ----- 06. Module Wrapper Function ----- //

// (function (exports, require, module, __filename, __dirname) {
//   console.log(__filename);
//   console.log(__dirname);

//   var url = "http://mylogger.io/log";

//   function log(message) {
// Send an HTTP request
//     console.log(message);
//   }

//   module.exports = log;

// module.exports.log = log;
// exports.log = log;

// exports = log; // module.exports
// });

// console.log(__filename);
// console.log(__dirname);

// var url = "http://mylogger.io/log";

// function log(message) {
// Send an HTTP request
//   console.log(message);
// }

// module.exports = log;

// ---- 12. Extending EventEmitter ----- //

// const EventEmitter = require("events");

// var url = "http://mylogger.io/log";

// class Logger extends EventEmitter {
//   log(message) {
// Send an HTTP request
//     console.log(message);

// Raise an event
//     this.emit("messageLogged", { id: 1, url: "http://" });
//   }
// }

// module.exports = Logger;
