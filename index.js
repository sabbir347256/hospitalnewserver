const express = require('express');
const app = express();
const { connetDatabase } = require('./src/config/dbcofig');
require('dotenv').config();
const port = process.env.PORT || 5000;




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =  `mongodb+srv://HospitalServer:bqXObbTkskPUuGvy@database.akelwma.mongodb.net/?appName=DataBase`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const DataBase = client.db('Hospital_Server');
        const textpost = DataBase.collection('textpost');

        app.post('/textpost',(req,res) => {
            const user = req.body;
            const result = textpost.insertOne(user);
            res.send(result);
            res.json('successfull')
        })
       
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Server is running');
});
app.listen(port, () => {
    console.log(`Hospital server is runnign : ${port}`);
});
