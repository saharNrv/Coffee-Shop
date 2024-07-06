import connectToDB from "@/configs/db"
import contactModel from "@/models/Contact"

export async function POST(req) {
    try {
        connectToDB()

        const body = await req.json()

        const { email, name, company, phone, message } = body

        const contact = await contactModel.create({ email, name, company, phone, message })

        return Response.json({ message: 'contact created successfully' }, { status: 201 })

    } catch (err) {
        return Response.json({ err }, { status: 500 })
    }
}