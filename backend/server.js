/*
 Big red button backend server
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190413
*/
import express from 'express';

console.log("Big red button server")
console.log("started")

const app = express()
const port = 3000
let current = 50;
app.use(express.static("public"))

app.options('/api/current', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
});
app.get('/status', (request, response) => {
    current+=1
    response.send(current.toString())
})

app.get('/load', (request, response) => {
    response.send(current.toString())
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))