var interval = setInterval(function(name) {
	console.log(`Hello ${name}(interval)`);
}, 3000, 'Shelley');


var timer = setTimeout(function(name) {
	console.log(`Hello ${name}(timer)`);
}, 30000, 'Shelley');

timer.unref();

console.log('waiting on first interval...');