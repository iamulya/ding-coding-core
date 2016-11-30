`use strict`
import fs from 'fs';
import path from 'path';
import marked from 'marked';

const markdownDir = 'markdowns'
    , markdownConfStr = fs.readFileSync(markdownDir + '.conf', 'utf8').replace("\r\n", "").replace(" ", "").replace("\t", "")
    , markdownConfObj = JSON.parse(markdownConfStr);

export default class DingCodingCore {
    constructor() {
        this.allMarkdowns = [];
        this.lowercaseMarkdowns = [];

        this._getAllMarkdowns();
    }

    setup(conf) {
        let markdowns = conf.mds;
        let result = {};
        markdowns.map(file => {
            let filename = file.split('.')[0];
            let markdownPath = path.join(markdownDir, file);
            let convToHtml = marked(fs.readFileSync(markdownPath, 'utf8'));
            result[filename] = convToHtml;
        });
        return result;
    }

    _ensureDirectoryExistence(filePath) {
        var dirname = path.dirname(filePath);
        if (fs.existsSync(dirname)) {
            return true;
        }
        this._ensureDirectoryExistence(dirname);
        fs.mkdirSync(dirname);
    }

    _getAllMarkdowns() {
        var files = fs.readdirSync(markdownDir);
        files.forEach(file => {
            var filename = file.split('.')[0];
            this.allMarkdowns.push(filename);
            this.lowercaseMarkdowns.push(filename.toLowerCase());
        });
    }

    linkMarkups() {
        let self = this;
        this.allMarkdowns.map(function (val) {
            var filePath = path.join(markdownDir, val + '.md');
            var fileContent = fs.readFileSync(filePath, 'utf8');

            //regex using positive lookbehind(/(?<=[^\[\w*\]|[^\(\.\/.*\)])\w+/g) to avoid deep/multiple linking of md files
            //doesnt work with javascript.
            //using negative lookahead : \w+(?!(\w*]|\w*\.*\w*\)))
            var changedFileContent = fileContent.replace(/\w+(?!(\w*]|\w*\.*\w*\)))/g, function (val) {
                var truncatedLowercaseVal = val.toLowerCase();
                if(self.lowercaseMarkdowns.indexOf(truncatedLowercaseVal) != -1) {
                    var htmlRelPath = '/' + ( markdownConfObj[truncatedLowercaseVal] ? markdownConfObj[truncatedLowercaseVal] : '' ) + '/' + truncatedLowercaseVal + '.html';
                    var changedVal = '[' + val + ']' + '(' +  htmlRelPath + ')';
                    return changedVal;
                } else {
                    return val;
                }
            });
            if(fileContent !== changedFileContent) {
                console.log(filePath + ' has changed');
                fs.writeFileSync(filePath, changedFileContent);
            }
        });
    }

    createHtmlFromMarkdown() {
        let self = this;
        this.allMarkdowns.map(function (file) {
            var fileToWrite = file.toLowerCase() + '.html';
            var fullFilepath = fileToWrite;
            if(markdownConfObj[file]) {
                fullFilepath = path.join(__dirname, markdownConfObj[file], fileToWrite);
                self._ensureDirectoryExistence(fullFilepath);
            }
            var filePath = path.join(markdownDir, file + '.md');
            var convToHtml = marked(fs.readFileSync(filePath, 'utf8'));
            fs.writeFileSync(fullFilepath, convToHtml);
        });
    }
}