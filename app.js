var glob = require('glob');
var markdownpdf = require('markdown-pdf');
var bookPath = './out/documentation.pdf';
var options = {
    cssPath: 'css/github-markdown.css',
    cwd: './src',
};
glob('./src/*.md', function(er, files) {
    if (er) {
        throw er;
    }
    if (files) {
        console.log(files);
        markdownpdf(options)
            .concat.from(files)
            .to(bookPath, () => {
                console.log('Created', bookPath);
            });
    }
});
