const { MongoClient, ServerApiVersion } = require('mongodb');
let client;
let DataBase;
const connetDatabase = async () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@database.akelwma.mongodb.net/?appName=DataBase`;

    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    console.log("Pinged your deployment. You successfully connected to MongoDB!");



    DataBase = client.db('Hospital_Server');
    return DataBase;
}


const getDB = () => {
  return DataBase;
};



module.exports = { connetDatabase ,getDB}