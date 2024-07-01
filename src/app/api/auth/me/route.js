import connectToDB from "@/configs/db";
import userModel from "@/models/User";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET(req) {
    connectToDB()

    const token = cookies().get('token')
    let user = null
    if (token) {
        const tokenPayload = verifyAccessToken(token.value)
        if (tokenPayload) {
            user = await userModel.findOne({ email: tokenPayload.email })

        }
        return Response.json({user},"-password -refreshToken -__v")
    }else{

        return Response .json({
            data:null,
            message:'not access !!'
        },{status:401})
    }

}