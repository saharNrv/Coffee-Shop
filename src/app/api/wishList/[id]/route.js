import connectToDB from "@/configs/db"
import wishListModel from "@/models/WishList"
import { authUser } from "@/utils/serverHelpers"

export async function DELETE(req,{params}) {
    try{
        connectToDB()
        const user = await authUser()
        if(!user){

            return Response.json({ message: 'user not found' }, { status: 401 })

        }

        const productID =params.id

        const wish = await wishListModel.findOneAndDelete({ user: user._id, product:productID })
        return Response.json({ message: 'product remove from wishList successfully' }, { status: 200 })
        

    }catch (err){

        return Response.json({ err }, { status: 500 })

    }

}