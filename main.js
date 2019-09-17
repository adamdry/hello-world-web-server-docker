const express = require('express')
const uuidv1 = require('uuid/v1');
const app = express()
const port = 80

const uuid = uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'

app.get('/', (req, res) => res.send(`Hello World! from "hello-world-web-server-docker" instanceid: ${uuid} time: ${getDateTimeStr()}`))

app.listen(port, () => console.log(`Example app listening on port ${port}! from "hello-world-web-server-docker" instanceid: ${uuid} time: ${getDateTimeStr()}`))


// this allows Ctrl+C to stop the docker container
process.on('SIGINT', function() {
    process.exit();
});

function getDateTimeStr() {

    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    
    // prints date in YYYY-MM-DD format
    //console.log(year + "-" + month + "-" + date);
    
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

}
