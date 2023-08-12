import { connectToDB } from "@utils/database"
import Quote from '@models/quote'

//GET single quote by id
export const GET = async(req,{params})=>{
    try {
        await connectToDB()
        
        const quote = await Quote.findById(params.id).populate('creator')
        if(!quote) return new Response("Quote Not Found",{
            status:404
        })
        return new Response(JSON.stringify(quote),{status:200})
    } catch (error) {
        console.log(error)
    }
}

//PATCH
export const PATCH = async (req,{params}) => { 
    const {quote,tag} = await req.json()
    try {
        await connectToDB()
        
        const doesQuoteExist = await Quote.findById(params.id)
        if(!doesQuoteExist) return new Response("Quote doesn't exist",{status:404})
        doesQuoteExist.quote = quote
        doesQuoteExist.tag = tag
        
        await doesQuoteExist.save()
        return new Response(JSON.stringify(doesQuoteExist),{status:200})
    } catch (error) {
        console.log(error)
    }
}

//DELETE
export const DELETE = async (req,{params}) => { 
    try {
        await connectToDB()
        
        await Quote.findByIdAndDelete(params.id)
        return new Response('Deleted successfully',{status:200})
    } catch (error) {
        return new Response('Deleting is unsuccessfully, try again later',{status:501})
    }

 }
