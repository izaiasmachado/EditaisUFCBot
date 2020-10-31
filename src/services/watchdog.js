const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname, '..', 'data', 'data.json')

async function hasChanged(data) {
    const rawStoredData = fs.readFileSync(dataPath, { encoding: 'utf8', flag: 'r' })
    const parsedData = JSON.stringify(data)
    fs.writeFileSync(dataPath, parsedData, 'utf-8')
    return (rawStoredData !== parsedData)
}

module.exports = { hasChanged }