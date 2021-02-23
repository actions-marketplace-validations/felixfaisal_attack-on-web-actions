const fs = require('fs')
const { exit } = require('process')
const reg = require('../data/apiKeyRegex')

const fileReaderRegex = (fileName) => {
    let data = fs.readFileSync(fileName, 'utf8').toString().split('\n')
    // console.log(data[0])
    let flag = 0;
    // console.log(data)
    for (x in data) {
        reg.providers.forEach(element => {
            let regex = new RegExp(element.pattern, element.flags);
            //console.log(regex)
            if (regex.test(data[x]) == true) {
                flag = 1;
                console.log(element.provider + " Found in " + fileName)
                // console.log(fileName)
                console.log(x, data[x])
                return
            }

        });
        if (flag == 1) {
            exit(1)
        }
    }

}
// alias
module.exports = fileReaderRegex