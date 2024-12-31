import connectToDB from "@/configs/db";
import banModel from '@/models/Ban'

export async function PUT(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { phone, email } = body

        await banModel.create({ phone, email })
        return Response.json({ message: "ban user successfully" })
    } catch (err) {
        return Response.json({ message: err }, { status: 500 })

    }
}