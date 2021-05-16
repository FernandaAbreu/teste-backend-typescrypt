import {Schema,model,Document, Model} from 'mongoose'
import { TypeInterface } from '../interfaces/TypeInterface'
import {UserInterface} from '../interfaces/UserInterface'
import { TypeModel } from './Type'


export interface UserModel extends UserInterface,Document {
    type : TypeInterface['name']
}

const UserSchema = new Schema({
    name:  {
        type: String,
        required: true,
      },
    password:  {
        type: String,
        required: true,
      },
    user_type: [{ type: Schema.Types.ObjectId, ref: 'Type' ,required: true}],
    email: { type: String, unique: true,required: true },
    status: { type: Boolean, required: true },
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
      },
})

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
