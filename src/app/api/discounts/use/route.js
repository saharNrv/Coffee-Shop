import connectToDB from "@/configs/db";
import discountModel from "@/models/Discount"

export async function PUT(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { code } = body

        const discount = await discountModel.findOne({ code })

        if (!discount) {
            return Response.json({ message: "code not found" }, { status: 404 })

        } else if (discount.uses === discount.maxUse) {
            return Response.json({ message: "code usage limit" }, { status: 422 })

        } else {
            return Response.json(discount)

        }

    } catch (err) {
        return Response.json({ message: err }, { status: 500 })
    }

}