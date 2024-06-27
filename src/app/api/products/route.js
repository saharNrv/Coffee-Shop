import connectToDB from "@/configs/db";
import productModel from "@/models/Product";

export async function POST(req) {
    
    try {
        
        connectToDB()


        const body = await req.json()

        const {
            title,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags,
            

        } = body

        const product = await productModel.create({
            title,
            price,
            shortDescription,
            longDescription,
            weight,
            suitableFor,
            smell,
            tags,    
         
        })

        return Response.json({ message: 'create product successfully', data: product }, { status: 201 })
    } catch (err) {
        
        return Response.json({ message: err }, { status: 500 })
    }
}