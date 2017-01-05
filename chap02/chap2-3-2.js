var buf = new Buffer(4);

// 將值寫入 buffer
buf.writeUInt8(0x63,0);
buf.writeUInt8(0x61,1);
buf.writeUInt8(0x74,2);
buf.writeUInt8(0x73,3);

// 以字串輸出 buffer
console.log(buf.toString());

var buf2 = new Buffer(4);
buf2[0] = 0x63;
buf2[1] = 0x61;
buf2[2] = 0x74;
buf2[3] = 0x73;
console.log(buf2.toString());