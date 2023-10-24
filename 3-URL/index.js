let http = require("http");
let fs = require("fs");
let url = require("url");

let address = "https://mansipatidar:8080/default.html?name=mansi&age=19";

// The parse method is converting string into an object that contains the different parts of the URL.
// true option will parse the Query string also.
let result = url.parse(address, true);

// All the keys of result object 
console.log(result.host); //mansipatidar:8080
console.log(result.hostname); //mansipatidar
console.log(result.path); // /default.html?name=mansi&age=19
console.log(result.pathname);  // /default.html
console.log(result.port);  // 8080
console.log(result.slashes); //true
console.log(result.protocol); //http:
console.log(result.search); // '?name=mansi&age=19'
console.log(result.auth); // null
console.log(result.hash); // null
console.log(result.href); // http://mansipatidar:8080/default.html?name=mansi&age=19
console.log(result.query); // [Object: null prototype] { name: 'mansi', age: '19' }

// To get a specific query
console.log(result.query.age);

// We can directly print the object that contains all these key value pairs
console.log(result);
