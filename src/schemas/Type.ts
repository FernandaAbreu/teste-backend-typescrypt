import {Schema,model, Model} from 'mongoose'
import { TypeInterface } from '../interfaces/TypeInterface'

export interface TypeModel extends TypeInterface,Document {
    
}


const TypeSchema = new Schema({
    name: { type: String, unique: true,required: true },
    description: { type: String, unique: true,required: true },
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
      },
})

export default model('Type',TypeSchema)

export const Type: Model<TypeModel> = model<TypeModel>('Type',TypeSchema)

