import {Schema,model,Document} from 'mongoose'


interface UserInterface  extends Document{
    email : string
    senha : string
    nome: String 
    status : Boolean
}

const UserSchema = new Schema({
    nome: String,
    senha: String,
    user_type: [{ type: Schema.Types.ObjectId, ref: 'Type' }],
    email: { type: String, unique: true },
    status: Boolean,
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
      },
})

export default model<UserInterface>('User',UserSchema)
