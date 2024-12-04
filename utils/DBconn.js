import mongo from 'mongodb'

async function getDB() {
    try {
        const url ="mongodb+srv://nit:nit@cluster0.qqrov.mongodb.net/"
        const mongoClient   = mongo.MongoClient;
        const server        = await mongoClient.connect(url)
        const db            = server.db("nit");
        return db;
    } catch(ex){
        console.error(ex);
        return ex.message;
    }
}

export default getDB