import mongoose,{Schema,model,models} from 'mongoose'

const quoteSchema = new Schema({
    creator : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Users',
    },
    quote: {
        type : String,
        required :[true,'Quote is required']
    },
    tag: {
        type : String,
        required :[true,'Tag is required']
    }
})

const Quote = models.Quotes || model('Quotes',quoteSchema)
export default Quote