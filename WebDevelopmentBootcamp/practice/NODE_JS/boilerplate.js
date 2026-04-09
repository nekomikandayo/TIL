const fs = require('fs');
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('ディレクトリが作成されました');
//     if (err) throw err;
// });

const dirName = process.argv[2] || 'Project';

try {
fs.mkdirSync(dirNam);
    fs.writeFileSync(`${dirName}/index.html`, '');
    fs.writeFileSync(`${dirName}/app.js`, '');
    fs.writeFileSync(`${dirName}/style.css`, '');
} catch (e) {
    console.log('エラーが発生しました', err);
}

console.log('ファイルの一番下');