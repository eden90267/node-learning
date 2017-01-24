var fs = require('fs');

try {
	var data = fs.readFileSync('./apples.txt', 'utf8');
	console.log(data);

	var adjData = data.replace(/[A|a]pple/g,'orange');

	fs.writeFileSync('./oranges.txt', 'utf8');
} catch (err) {
	console.log(err);
}