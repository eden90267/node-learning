/**
 * Created by eden90267 on 2017/1/3.
 */
"use strict"

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

// €(歐元符號)需三個8位元組表示：0xE2、0x82、0xAC

let euro = new Buffer([0xE2, 0x82]);
let euro2 = new Buffer([0xAC]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2)); // €

console.log(euro.toString()); // 垃圾
console.log(euro2.toString()); // 垃圾


// 也可使用buffer.write()轉換字串到現有的buffer中，但buffer必須具有正確大小已儲存字元的八位元組。

let buf = new Buffer(3); // 需要正確的大小
buf.write('€', 'utf-8');

console.log(buf.toString());
console.log(buf.length); // 3