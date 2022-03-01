import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL ="mongodb+srv://allinone22:ashstar@bhaibhai.nbixy.mongodb.net/CLONES?retryWrites=true&w=majority"
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;