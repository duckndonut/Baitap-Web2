const express = require('express');
const app = express();
const port = 4000;

const morgan = require("morgan")
app.use(morgan("combined"))


const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors())

app.listen(port, () => {
    console.log(`Server-Fashion listening on port ${port}`)
})

app.get("/api", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

app.get("/fashions", cors(), async (req, res) => {
    try {
        let result = await fashionCollection.find({}).toArray();
        result.sort(function (a, b) {
            return new Date(b.create_date) - new Date(a.create_date);
        });
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

app.get("/fashions/:id", cors(), async (req, res) => {
    try {
        var o_id = new ObjectId(req.params["id"]);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})

app.get("/fashions/style/:style", cors(), async (req, res) => {
    try {
        const result = await fashionCollection.find({ style: req.params["style"] }).toArray();
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

// get list of style
app.get("/fashions/get/liststyle", cors(), async (req, res) => {
    try {
        const result = await fashionCollection.find({}).toArray();
        var styleList = []
        for (var i = 0; i < result.length; i++) {
            if (styleList.indexOf(result[i].style) == -1) {
                styleList.push(result[i].style)
            }
        }
        res.send(styleList)
    }
    catch (err) {
        res.send(err)
    }
})

app.post("/fashions", cors(), async (req, res) => {
    try {
        // put json Fashion into database
        await fashionCollection.insertOne(req.body)
        // send message to client (send all database to client)
        res.send(req.body)
    } catch (err) {
        res.send(err)
    }
})

app.put("/fashions", cors(), async (req, res) => {
    //update json Fashion into database
    try {
        await fashionCollection.updateOne(
            { _id: new ObjectId(req.body._id) },//condition for update
            {
                $set: { //Field for updating
                    style: req.body.style,
                    fashion_subject: req.body.fashion_subject,
                    fashion_detail: req.body.fashion_detail,
                    fashion_image: req.body.fashion_image,
                    create_date: req.body.create_date
                }
            }
        )
        // send Fashion after updating
        var o_id = new ObjectId(req.body._id);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    }
    catch (err) {
        res.send(err)
    }
})

app.delete("/fashions/:id", cors(), async (req, res) => {
    try {
        var o_id = new ObjectId(req.params["id"]);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        await fashionCollection.deleteOne({ _id: o_id })
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})