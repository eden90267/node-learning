var buf1 = new Buffer('this is the way we build our buffer');
var lnth = buf1.length;

// 以舊段落建置新 buffer
var buf2 = buf1.slice(19,lnth);
console.log(buf2.toString()); // build our buffer

// modify second buffer
buf2.fill('*',0,5);
console.log(buf2.toString()); // ***** our buffer

//顯示第一個 buffer 的影響
console.log(buf1.toString()); // this is the way we ***** our buffer

// equals可判斷是否相等
if (buf1.equals(buf2)) console.log('buffers are equal');

// buffer.copy()複製
var buf1 = new Buffer('this is a way we build our buffer');

var buf2 = new Buffer(10);
buf1.copy(buf2);

console.log(buf2.toString()); // this is a 

var buf1 = new Buffer('1 is number one');
var buf2 = new Buffer('2 is number two');

var buf3 = new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2)); // -1
console.log(buf2.compare(buf1)); // 1
console.log(buf1.compare(buf3)); // 0