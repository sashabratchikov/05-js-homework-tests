const fs = require('fs');
const obfuscator = require('javascript-obfuscator');

const workFolder = './src/';
const buildFolder = './build/';
const indexFile = '/index.html';
const scriptFile = '/script.js';
const testFile = '/test.js';

if (!fs.existsSync(buildFolder)) {
    fs.mkdirSync(buildFolder);
}

const makeIndexHTML = (folder) => {
    if (!fs.existsSync(buildFolder + folder)) {
        fs.mkdirSync(buildFolder + folder);
    }
    fs.copyFile(workFolder + folder + scriptFile, buildFolder + folder + scriptFile, (err) => {
        if (err) throw err;
    });
    const indexContent = fs.readFileSync(workFolder + folder + indexFile, { encoding: 'utf-8' });
    const testContent = fs.readFileSync(workFolder + folder + testFile, { encoding: 'utf-8' });
    const obfuscationResult = obfuscator.obfuscate(testContent);
    const newTestContent = '<script>' + obfuscationResult.getObfuscatedCode() + '</script>';
    const newIndexContent = indexContent.replace('<script src="test.js"></script>', newTestContent);
    fs.writeFile(buildFolder + folder + indexFile, newIndexContent, (err) => {
        if (err) throw err;
    });
}

fs.readdir(workFolder, (err, folders) => {
    folders.filter(folder => !folder.startsWith('.')).forEach(folder => {
        if (!err) {
            makeIndexHTML(folder);
        } else {
            console.log(err);
        }
    });
});