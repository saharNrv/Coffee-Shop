import connectToDB from "@/configs/db"
import commentModel from "@/models/Comment"
import { authAdmin } from "@/utils/serverHelpers"

export async function PUT(req) {

    try {
        const isAdmin = await authAdmin()
        if(!isAdmin){
            throw new Error("this api protected!!!")
        }
        connectToDB()
        const body = await req.json()
        const { id } = body
        await commentModel.findOneAndUpdate({ _id: id }, {
            $set: {
                isAccess: true
            }
        })

        return Response.json({ message: "comment is accept successfully" })


    } catch {
        return Response.json({ message: err }, { status: 500 })
    }

}