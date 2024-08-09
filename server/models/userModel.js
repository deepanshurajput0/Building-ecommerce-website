import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});


userSchema.methods.getJwtToken = function(){
    return  jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'15d'})
}

const User = mongoose.model('User', userSchema);

export default User;
