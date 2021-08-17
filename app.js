import * as fs from 'fs'

fs.readFile('index.html', 'utf-8', (data) => {
    console.log(data)
})
