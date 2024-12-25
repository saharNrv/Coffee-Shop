import connectToDB from "@/configs/db"
import subDepartmentModel from '@/models/SubDepartment'

export async function POST (req) {
    try{
        await connectToDB()
        const body = await req.json()
        const {title, department}=body

        await subDepartmentModel.creat({title})

        return Response.json({msg:"subdepartment creat successfully"},{status:200})

    }catch(err){
        return Response.json({err},{status:500})

    }
}