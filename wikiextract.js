var https = require('https');
var marked = require('marked');
var htmlToMarkdown = require('html-md');
var fs = require('fs');

let trRegEx = /<tr.+?>(.+?)(?=<\/tr>)/g;
let tdRegEx = /<td>(\s+?\d+?)<\/td><td>(.+?)<\/td>/g;
let languagesRegEx = /<td>(.+?)<\/td>.+?href="(.+?)".+?>(.*)<\/a>/g;

var writeMarkdownForNonText = function(wikiText, ...filenames) {
  let sections = wikiText.remaining.sections;
  let htmlText = '';
  let output = {};
  sections.map(section => {
    let line = section.line;
    if(line) {
      htmlText += line.replace(/^/g, '<h2>').replace(/$/g, '</h2>');
    }

    let text = section.text;
    if(text) {
      let changedtext = text.replace(/\n/g, '').replace(/\r\n/g, '');
      let results = changedtext.match(trRegEx);
      if(results && results.length) {
        results.map(result => {
          if(result) {
            let tds = result.match(tdRegEx);
            if(tds && tds.length == 1) {
              let td = tds[0];
              let matches = languagesRegEx.exec(td);
              if(!matches) {
                console.log('Failed to get a match for : ', td);
              }
              // example match : [ '<td> 2014</td><td> <a href="/wiki/C++14" title="C++14">C++14</a>',
              // ' 2014',
              // '/wiki/C++14',
              // 'C++14',
              // index: 0,
              // input: '<td> 2014</td><td> <a href="/wiki/C++14" title="C++14">C++14</a></td>' ]

              else {
                let year = matches[1].replace(/\s+?/g, '');
                let langLinkObj = {'year': year, 'link' : matches[2]};
                output[matches[3]] = langLinkObj;
            }
          }
        }
        });
      }
      htmlText += section.text;
    }

  });

  writeFiles(htmlText, ...filenames);

  let allPossibilities = Object.keys(output);
  let successful = allPossibilities.filter(key => {
    let link = output[key].link;
    let year = output[key].year;
    let linkTokens = link.split('/');
    let title = linkTokens[linkTokens.length - 1];
    key = key.replace('/', '').replace(/\W[^#\++\d]/g, '');
    return getMobileText(title, key, year);
  });
};

var writeMarkdownForText = function(wikiText, ...filenames) {
  let sections = wikiText.sections;
  let htmlText = '';
  if(!sections) {
    console.log('No Content for language : ' + filenames[0]);
    return false;
  }
  sections.map(section => {
    let items = section.items;
    if(section.line) {
      htmlText += section.line.replace(/^/g, '<h2>').replace(/$/g, '</h2>');
    }

    items.map(item => {
      let text = item.text;
      if(item.type === 'p') {
        htmlText += text.replace(/^/g, '<p>').replace(/$/g, '</p>');
      }
    });
  });

  writeFiles(htmlText, ...filenames);
  return true;
};

let writeFiles =  function(htmlText, ...filenames) {
  let langName = filenames[0];
  if(langName) {
    fs.writeFileSync('output/' + langName.replace(/$/g, '.html'), htmlText);
    fs.writeFileSync('markdowns/' + langName.replace(/$/g, '.md'), htmlToMarkdown(htmlText));
  }
  if(filenames.length == 2) {
    let year = filenames[1];
    if(year) {
      fs.writeFileSync('markdowns/' + year.replace(/$/g, '.md'), langName.replace(/$/g, '.md') + '\n', {flag: 'a'});
    }
  }
}

let getMobileText = function(title, ...filenames) {
  https.get({
          host: 'en.wikipedia.org',
          path: '/api/rest_v1/page/mobile-text/' + title,
          headers: {
              accept: 'application/json; charset=utf-8'
          }
      }, function(response) {
          var body = '';
          response.on('data', function(d) {
              body += d;
          });
          response.on('end', function() {
              var parsed = JSON.parse(body);
              return writeMarkdownForText(parsed, ...filenames);
          });
      });
}

let getMobileSections = function(title, ...filenames) {
  https.get({
          host: 'en.wikipedia.org',
          path: '/api/rest_v1/page/mobile-sections/' + title,
          headers: {
              accept: 'application/json; charset=utf-8'
          }
      }, function(response) {
          var body = '';
          response.on('data', function(d) {
              body += d;
          });
          response.on('end', function() {
              var parsed = JSON.parse(body);
              return writeMarkdownForNonText(parsed, ...filenames);
          });
      });
}

getMobileSections('Timeline_of_programming_languages', 'prog_timeline');
