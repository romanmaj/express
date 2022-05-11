import mongoose from 'mongoose'

export interface IUser {
    email: string
    password: string
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
    build(params: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
    email: string
    password: string
}


const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }
})

userSchema.statics.build = (params: IUser) => {
    return new User(params)
}

const User = mongoose.model<UserDoc, UserModelInterface>('User', userSchema)


export { User }
