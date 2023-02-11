// ----- 01. Your First Node Program ----- //
// function sayHello(name) {
//   console.log("Hello, " + name);
// }

// sayHello("Muaaz");
// console.log(window);

// In terminal run `node app.js`

// ----- 02. Global Object ----- //

// console.log(); // global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// window.console.log();

// var message = "";
// window.message;

// There is no window object in Node, we use global object.
// global.console.log();
// global.setTimeout();

// var message = "";
// console.log(global.message); // undefined

// ----- 03. Modules ----- //
// var sayHello = function () {};

// window.sayHello();

// console.log(module);

// ----- 04. Creating a module ----- //
// Create a new file `logger.js`

// ----- 05. Loading a Module ----- //

// const logger = require("./logger.js");

// console.log(logger);
// logger.log("message");

// const log = require("./logger.js");
// console.log(log);
// log("message");

// ----- 06. Module Wrapper Function ----- //

// const logger = require("./logger.js");
// console.log(logger);

// ----- 07. Path Module ----- //

// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// ----- 08. OS Module ----- //

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// ----- 09. File System Module ----- //

// const fs = require("fs");

// const files = fs.readdirSync("./");

// console.log(files);

// const files = fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result: ", files);
//   }
// });

// ----- 10. Events Module ----- //

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// Register a listener
// emitter.on("messageLogged", function () {
//   console.log("Listener called");
// });

// Raise an event
// emitter.emit("messageLogged");

// Emit: Making a noise, produce - signalling

// ----- 11. Event Arguments ----- //

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// Register a listener
// emitter.on("messageLogged", (arg) => {
// e, eventArg
//   console.log("Listener called", arg);
// });

// Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// ---- 12. Extending EventEmitter ----- //

// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// Register a listener
// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// logger.log("message");

// ----- 13. HTTP Module ----- //

// const http = require("http");

// const server = http.createServer();

// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

// server.listen(3000);

// console.log("Listening on port 3000...");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }

//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// server.listen(3000);

// console.log("Listening on port 3000...");
