const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../inner-site/build');
const dest = path.resolve(__dirname, '../static/os');

if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
}

fs.cpSync(src, dest, { recursive: true, force: true });
console.log('Successfully copied inner-site/build to static/os');
