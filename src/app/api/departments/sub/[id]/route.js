import connectToDB from "@/configs/db"
import { isValidObjectId } from "mongoose";
import subDepartmentModel from "@/models/SubDepartment"

export async function GET(req, { params }) {
    try {
        await connectToDB()
        const id = params.id;
        if (!isValidObjectId(id)) {
            return Response.json({ msg: "ID is not valid !!" }, { status: 422 })

        }

        const subDepartment = await subDepartmentModel.find({ department: id })

        return Response.json(subDepartment, { status: 200 })


    } catch (err) {
        return Response.json({ msg: err }, { status: 500 })
    }

}