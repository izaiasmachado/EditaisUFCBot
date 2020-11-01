const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname, '..', 'data', 'data.json')

async function hasChanged(data) {
    const rawStoredData = fs.readFileSync(dataPath, { encoding: 'utf8', flag: 'r' })
    const parsedData = JSON.stringify(data)
    return (rawStoredData !== parsedData)
}

async function save(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf-8')
}

module.exports = { hasChanged, save }