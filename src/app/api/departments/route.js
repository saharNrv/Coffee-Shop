import connectToDB from "@/configs/db"
import departmentModel from '@/models/Department'

export async function POST (req) {
    try{
        await connectToDB()
        const body = await req.json()
        const {title}=body

        await departmentModel.create({title})

        return Response.json({msg:"department creat successfully"},{status:200})

    }catch(err){
        return Response.json({err},{status:500})

    }
}

export async function GET () {
    await connectToDB()
   const data= await departmentModel.find({})
    return Response.json(data)

}