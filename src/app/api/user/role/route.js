import connectToDB from "@/configs/db"
import userModel from "@/models/User"

export async function PUT(req) {

    try {
        connectToDB()
        const body = await req.json()
        const { id } = body

        const user = await userModel.findOne({ _id: id }).lean()
        await userModel.findOneAndUpdate({ _id: id }, {
            $set: {
                role: user.role === "USER" ? "ADMIN" : "USER"
            }
        })

        return Response.json({ message: "user role update successfully" })


    } catch (err) {
        return Response.json({ message: err }, { status: 500 })

    }
}

export async function DELETE(req) {

    try {
        connectToDB()
        const body = await req.json()
        const { id } = body
        await userModel.findOneAndDelete({ _id: id })
        return Response.json({ message: "delete user successfully" })
    } catch (err) {
        return Response.json({ message: err },{status:500})

    }

}