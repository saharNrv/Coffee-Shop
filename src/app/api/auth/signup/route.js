import { generateAccessToken, hashPassword } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import userModel from "../../../../../models/User";
import { roles } from "@/utils/constants";

export async function POST(req) {
    connectToDB()

    const body = await req.json()
    const { name, phone, email, password } = body

    //validations

    const userExistent = await userModel.findOne({
        $or: [{ name }, { email }, { phone }]
    })

    if (userExistent) {
        return Response.json(
            { message: 'The username or email or phoneexist already' }
            , { status: 422 })
    }

    const hashedPassword = await hashPassword(password)
    const accessToken = generateAccessToken({ name })

    const users = await userModel.find({})

    await userModel.create({
        name,
        phone,
        email,
        password: hashedPassword,
        role: users.lenght > 0 ? roles.USER : roles.ADMIN


    })

    return Response.json(
        { message: 'User LoggedUp successfully' },
        {
            status: 201,
            headers: {
                'Set-Cookie': `token=${accessToken}; path=/; httpOnly=true`

            }
        })

}