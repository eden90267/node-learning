/**
 * Created by eden90267 on 2017/1/3.
 */
"use strict"

// buffer可轉換成JSON物件

let buf = new Buffer('This is my pretty example');
let json = JSON.stringify(buf);

console.log(json); // data是8位元組

// json回到字串

let buf2 = new Buffer(JSON.parse(json).data);

console.log(buf2.toString()); // this is my pretty example
console.log(buf2.toString('ascii')); // this is my pretty example
console.log(buf2.toString('utf8', 11, 17)); // pretty