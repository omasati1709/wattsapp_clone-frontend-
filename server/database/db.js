import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pmcxfi7.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false,useCreateIndex:true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error while connecting with database ', error.message);
    }

};

export default Connection;




// wattsapp_clone  password
//  wattsapp_clone   username
// mongodb+srv://<username>:<password>@cluster0.cosifcy.mongodb.net/?retryWrites=true&w=majority
