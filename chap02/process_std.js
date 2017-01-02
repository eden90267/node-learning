/**
 * Created by eden90267 on 2017/1/2.
 */
process.stdin.setEncoding('utf8'); // 移除程式會失敗。原因是buffer上沒有trim()函式。可將buffer轉成字串然後執行trim，但更好方式是加上編碼並移除任何意料外的副作用。

process.stdin.on('readable', function () {
    var input = process.stdin.read();

    if (input != null) {
        process.stdout.write(input);

        var command = input.trim();
        if (command == 'exit') {
            process.exit(0);
        }
    }
});