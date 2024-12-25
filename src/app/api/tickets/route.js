import connectToDB from "@/configs/db"
import { authUser } from "@/utils/auth"
import ticketModels from "@/models/Ticket"

export async function POST(req) {

    try {
        await connectToDB()
        const user = await authUser()
        const reqBody = await req.json()
        const { title, body,  department, subDepartment, priority } = reqBody

        await ticketModels.create({
            title,
            body,
            user: user._id,
            department,
            subDepartment,
            priority
        })

        return Response.json({msg:"save ticket successfully"},{
            status:201
        })

    } catch (err) {
        return Response.json({ err }, { status: 500 })
    }

}