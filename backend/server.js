/*
 Big red button backend server
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190413
*/
import express from 'express'
import fs from 'fs'
import path from 'path'

console.log("Big red button server")
console.log("started")

const app = express()
const port = 3000
let current = 0;
const db_path = path.join(__dirname, "db.json");


app.use(express.static("public"))

app.options('/api/current', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.end()
});
app.get('/status', (request, response) => {
    current += 1

    // write to the file

    let json = JSON.stringify(current)
    console.log("Writing to db")
    fs.writeFileSync(db_path, json)

    response.send(current.toString())
})

app.get('/load', (request, response) => {

    //read from the file
    if (fs.existsSync(db_path)) {
        console.log("Reading from db")
        try {
            let data = fs.readFileSync(db_path, "UTF-8")
            console.log(JSON.parse(data))
            current = JSON.parse(data)
        } catch (err) {
            console.log(err)
        }
    }
    response.send(current.toString())
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))