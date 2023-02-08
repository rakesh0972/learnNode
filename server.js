// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const calc = require('./calc');

const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors({ origin: "*" }));
// app.set("port", port);


app.get('/', (req, res) => {
    res.status(200).send('non blocking home page')
    // console.log(req.param.name);

});

app.post('/', (req, res) => {
    res.status(200).send('non blocking home page')

    // console.log(req.param.name);

});

const sum = (age, add) => {

    let sum = parseInt(age) + parseInt(add);
    return sum;

};



app.post('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    // console.log(req);
    // res.status(200).send('hello' + req.query('name'));
    const name = calc.login(req.body);
    // let age = req.query.age;
    // let add = req.query.add;
    // const a = sum(age, add);


    // res.status(200).send(`sum is  ${a}`);
    console.log(req.body);
    res.status(200).send(`welcome ${name}`);


    // console.log(req.query);
    // console.log(name);
    // console.log(calc.sum);

    // res.status(200).send(`my name is ${name} my age is ${age} add is ${add} sum is ${sum}`);


});




app.listen(port, () => {
    console.log('listining to possdfdrt number ')
})