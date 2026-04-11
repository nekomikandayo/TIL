const franc = require('franc');
let langs = require('langs');

const input = process.argv.slice(2).join(' ');

const langCode = franc(input);
if (langCode === 'und') {
    console.log('解析できないです！もっと多くのテキストを入力してください！');
} else {
    const language = langs.where('3', langCode);
    console.log(`${language.name} です！`);
}
