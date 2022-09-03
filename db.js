
import { MongoClient, ServerApiVersion } from 'mongodb';


const localUri = `mongodb://localhost:27017`;
const remoteUri = `mongodb+srv://testUser-old:${process.env.MONGODB_PASSWORD}@cluster0.hntk6cj.mongodb.net/?retryWrites=true&w=majority`


const whichUri = () => {
    if(process.env.NODE_ENV === 'development'){
        return localUri
    } else if(process.env.NODE_ENV === 'production'){
        return remoteUri
    }
}


const MongoDBInstance = new MongoClient(whichUri(), 
    { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
);




export const connectDB = async() => {


    const client = await MongoDBInstance.connect();

    console.log(process.env.NODE_ENV);

    console.log('mongodb connected!!!');
    const db = client.db('database1');



    return {
        client,
        db,
    }
}
