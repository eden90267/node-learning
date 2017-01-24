var fs = require('fs');
var writeStream = fs.createWriteStream('./log.txt', {
	'flag' : 'a',
	'encoding' : 'utf8',
	'mode' : 0666
});

writeStream.on('open', function() {

	// 取得檔案清單
	fs.readdir('./data/', function(err, files) {

		// 對每個檔案
		if (err) {
			console.log(err.message);
		} else {

			// 存取目錄之前
			var counter = 0;

			files.forEach(function(name) {

				// 修改內容
				fs.readFile('./data/' + name, 'utf8', function(err, data) {

					if (err) {
						console.error(err.message);
					} else {
						var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');

						//輸出到檔案
						fs.writeFile('./data/' + name, adjData, function(err) {

							if (err) {
								console.log(err.message);
							} else {

								// 記錄修改
								writeStream.write('changed ' + name + '\n', 'utf8', function(err) {

									if (err) {
										console.error(err.message);
									} else {
										console.log('finished ' + name);
										counter++;
										if (counter >= files.length) {
											console.log('all done');
										}
									}
								});
							}
						});
					}
				});
			});

			// console.log('all finished');
		}
	});
});

writeStream.on('error', function(err) {
	console.error('ERROR:' + err);
})