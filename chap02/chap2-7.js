"use strict"

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker(name, file) {
	this.name = name;
	this.writeStream = fs.createWriteStream('./' + file + '.txt', {
		'flags': 'a',
		'encoding': 'utf8',
		'mode': 0o666
	});
};

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function (input) {
	
	// 裁剪空白
	let command = input.trim().substr(0,3);

	// 處理命令
	// 若是wr則輸入到檔案
	if (command == 'wr:') {
		this.emit('write',input.substr(3,input.length));
	}
	// 若是en則結束程式
	else if (command == 'en:') {
		this.emit('end');
	}
	// 產生回音到標準輸出
	else {
		this.emit('echo', input);
	}

}

let ic = new InputChecker('Shelley', 'output');

ic.on('write', (data) => {
	ic.writeStream.write(data, 'utf8');
});

ic.on('echo', (data) => {
	process.stdout.write(ic.name + ' wrote ' + data);
});

ic.on('end', () => {
	process.exit();
});

// 設定密碼後擷取輸出
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
	let input = process.stdin.read();
	if (input !== null) {
		ic.check(input);
	}
})