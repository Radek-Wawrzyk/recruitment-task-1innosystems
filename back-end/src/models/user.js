import mongoose from 'mongoose';

const User = mongoose.Schema({
    name: String,
    surName: String,
    age: String,
    location: String,
    email: String 
});

export default mongoose.model('Users', User);