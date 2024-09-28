const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors')
app.use(cors())

app.get('/', (req,res) => {
    console.log("hello")
})

app.listen(port, () => {
    console.log("Connection Established")
    console.log(port);
});