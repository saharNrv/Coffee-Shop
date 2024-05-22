import connectToDB from "../../../../../configs/db";

export async function GET(req) {

    connectToDB()
    return Response.json({ message: 'req user' }, { status: 200 })

}