import connectToDB from "@/configs/db";
import discountModel from "@/models/Discount"

export async function POST(req) {

    try {
        connectToDB()
        const body = await req.json()
        const { code, percent, maxUse } = body

        await discountModel.create({ code, percent, maxUse })

        return Response.json({ message: "create discount code successfully" }, { status: 201 })

    }catch(err){
        return Response.json({ message: err}, { status: 500 })

    }
    
}