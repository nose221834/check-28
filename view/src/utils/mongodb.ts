import { MongoClient,Db } from "mongodb";

const {NEXT_PUBLIC_MONGODB_URI: uri,MONGO_DB: dbName} = process.env;

let cachedClient: MongoClient;
let cachedDb: Db;

if(!uri){
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
if(!dbName){
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export async function connectToDatabase() {
    if(cachedClient && cachedDb){
        return {client: cachedClient,db:cachedDb}
    }

    const client = await MongoClient.connect(uri!);
    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return {client,db}
}