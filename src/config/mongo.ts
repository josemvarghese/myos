import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();
let database: mongoose.Connection;
const dbHostUri: string = process.env.DB_URL;
export const connect = () => {
    const conectionOptions: any = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
    mongoose.connect(dbHostUri, conectionOptions);
    database = mongoose.connection;
    database.once(`open`, async () => {
        console.log(`Connected `);
    });
    database.on(`error`, () => {
        console.log(`Error connecting to database`);
    });
};

export const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose.disconnect();
};