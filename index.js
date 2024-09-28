const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path')

app.use(bodyParser.json())
app.use(cors())

app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Route to get an image
app.get('/pages/:pageNumber', (req, res) => {

    let id = req;

    if (id) {
        try {
            const imageName = req.params.pageNumber;
            const imagePath = path.join(__dirname, 'pages', imageName);

            res.sendFile(imagePath);
        }
        catch (e) {
            res.send({
                 status: 404,
                 message:"Image Not Found!"
            })
        }
    }
    else{
        res.send({
            status:400,
            message:"Didn't get image ID."
        })
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})