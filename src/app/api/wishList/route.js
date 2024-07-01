import connectToDB from "@/configs/db"
import wishListModel from "@/models/WishList"

export async function POST(req) {

    try {

        connectToDB()

        const body = await req.json()
        const { user, product } = body

        const wishList = await wishListModel.create({ user, product })

        return Response.json({ message: 'product add to wishList successfully' }, { status: 201 })

    } catch (err) {
        return Response.json({ err }, { status: 500 })
    }

}