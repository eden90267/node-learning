var timer1 = setTimeout(function(name) {
	console.log(`Hello ${name}`);
}, 30000, 'Shelley');

console.log('waiting on tomer...');
setTimeout(function(timer) {
	clearTimeout(timer);
	console.log('cleared timer');
}, 3000, timer1);