import {Schema,model} from 'mongoose'

const TypeSchema = new Schema({
    name: String,
    description: String
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
      },
})

export default model('Type',TypeSchema)
