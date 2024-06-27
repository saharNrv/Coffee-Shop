import connectToDB from "@/configs/db"
import commentModel from "@/models/Comment"
import productModel from "@/models/Product"

export async function POST(req) {

    try {
        connectToDB()

        const reqBody = await req.json()
        const { username, body, email,score, productID } = reqBody

        const comment = await commentModel.create({ username, body, email,score, productID })

        const updateProduct =await productModel.findOneAndUpdate({
            _id:productID
        },{
            $push:{
                comments:comment._id
            }
        })

        return Response.json({message:'comment create successfully',data:comment},{status:201})


    } catch (err) {
        return Response.json({ message: err }, { status: 500 })
    }

}