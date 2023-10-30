const { log } = require('console');
let url = require('url');

let addr ='https://localhost:5000/test.html?id=100&name=John';
let result = url.parse(addr,true);

let student = result.query;
console.log(`Student ID: ${student.id}`);
console.log(`Student Name: ${student.name}`);