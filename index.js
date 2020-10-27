const fs = require('fs');

const storyFile = fs.readFileSync('story.json', 'utf8');
const indexFile = fs.readFileSync('index.html', 'utf8');
const story = JSON.parse(storyFile);

story.source = indexFile;

const format = `window.storyFormat(${JSON.stringify(story)})`;

fs.writeFileSync('dist/format.js', format);
