import connectToDB from "@/configs/db"
import commentModel from "@/models/Comment"

export async function PUT(req) {

    try {
        connectToDB()
        const body = await req.json()
        const { id } = body
        await commentModel.findOneAndUpdate({ _id: id }, {
            $set: {
                isAccess: false
            }
        })

        return Response.json({ message: "comment is accept successfully" })


    } catch {
        return Response.json({ message: err }, { status: 500 })
    }

}