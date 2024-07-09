import connectToDB from "@/configs/db"
import { cookies } from "next/headers"

export async function POST(req) {
    try{
        connectToDB()
        cookies().delete('token')
        return Response.json({ message: 'signout successfully' }, { status: 200 })



    }catch (err){ 
        return Response.json({ err }, { status: 500 })
    }      
    
}