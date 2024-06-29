const fs=require('fs/Promise');
function readFile()
{
let fileData;
fs.readFile('data.txt')
.then(function(fileData){
    console.log('File parsing done!');
    console.log(fileData.toString());
})
.then(function() {});

console.log('Hi there!');
}

readFile();