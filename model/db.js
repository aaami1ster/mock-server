const fs = require('fs');
const dbDir = './db/'
exports.getResources = function() {
    
    const files = fs.readdirSync(dbDir, { withFileTypes: true });
    // console.log(files);
    const jsonFiles = files.filter(fl => {
    // console.log(fl)
    const name = fl.name.split('.');
    if(name[1] && name[1] === 'json') {
        return true;
    }
    return false;
    })
    // console.log('jsonFiles');
    // console.log(jsonFiles);

    const jsonFilesNames = files.map(fl => {
        // console.log(fl)
        const name = fl.name.split('.');
        if(name[1] && name[1] === 'json') {
            return name[0];
        }
    });

    return jsonFilesNames;
}

exports.getData = function(files) {
    let data = { }
    for (let index = 0; index < files.length; index++) {
        const name = files[index];
        const rawData = fs.readFileSync(dbDir + name + '.json');
        data[name] =  JSON.parse(rawData);
        
    }
    // console.log(data);
    return data;
}