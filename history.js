import DingCodingCore from './ding-coding-core';
import fs from 'fs';

const pug = require('pug')
    , markdownDir = 'markdowns'
    , viewname = __filename.split('.')[0]
    , pugFilePath = viewname + '.pug'
    , htmlFilePath = viewname + '.html'
    , viewConfStr = fs.readFileSync(__filename + '.conf', 'utf8').replace("\r\n", "").replace(" ", "").replace("\t", "")

let view = new DingCodingCore(),
    viewConf = JSON.parse(viewConfStr),
    dynamicMDs = view.setup(viewConf);

view.linkMarkups();
view.createHtmlFromMarkdown();

let resultingHtml = pug.renderFile(pugFilePath, {
    filename: pugFilePath,
    filters: [ require('jstransformer-markdown-it') ],
    pretty: true,
    viewConf: viewConf,
    dynamicHtmlPiece: dynamicMDs
});

console.log(resultingHtml);
fs.writeFileSync(htmlFilePath, resultingHtml);