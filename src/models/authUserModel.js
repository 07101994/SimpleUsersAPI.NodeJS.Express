import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema

export const AuthUserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
})
