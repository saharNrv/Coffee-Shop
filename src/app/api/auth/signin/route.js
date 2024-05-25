import { generateAccessToken, generateRefreshToken, validateEmail, validatePassword, verifyPassword } from "@/utils/auth"
import connectToDB from "../../../../../configs/db"
import userModel from "../../../../../models/User"

export async function POST(req) {

    try {
        connectToDB()

        const body = await req.json()
        const { email, password } = body

        const isValidEmail = validateEmail(email)
        const isValidPassword = validatePassword(password)

        if (!isValidEmail || !isValidPassword) {
            return Response.json({ message: 'email or password is invalid' }, { status: 401 })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return Response.json({ message: 'user not found' }, { status: 422 })

        }

        const isCorrectPasswordWithHash = verifyPassword(password, user.password)
        if (!isCorrectPasswordWithHash) {
            return Response.json({ message: 'email or password is not correct' }, { status: 401 })

        }

        const accessToken = generateAccessToken({ email })
        const refresh = generateRefreshToken({ email })

        await userModel.findOneAndUpdate({ email }, {
            $set: {
                refresh
            }
        })

        return Response.json({ message: 'user Logged in successfully' }, {
            status: 200,
            headers: {
                'Set-Cookies': `token=${accessToken};path=/;httpOnly=true`
            }
        })


    } catch (err) {
        return Response.json({ message: 'server error' }, { status: 500 })
    }
}