var markdownInclude = require('markdown-include');
var markdownpdf = require('markdown-pdf');
var bookPath = './out/documentation.pdf';
var options = {
    cssPath: 'css/github-markdown.css',
    cwd: './src',
};

markdownInclude.build = markdownInclude.options = {};
markdownInclude.processFile('./src/main.md');
var md = markdownInclude.replaceIncludeTags('./src/main.md');

markdownpdf(options)
    .from.string(md)
    .to(bookPath, () => {
        console.log('Created', bookPath);
    });
