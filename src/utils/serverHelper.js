import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import userModel from "@/models/User";

const authUser = async () => {
    connectToDB();
    const token = cookies().get("token");
    let user = null;
  
    if (token) {
      const tokenPayload = verifyAccessToken(token.value);
      if (tokenPayload) {
        user = await userModel.findOne({ email: tokenPayload.email });
      }
    }
  
    return user;
  };


  export default authUser
