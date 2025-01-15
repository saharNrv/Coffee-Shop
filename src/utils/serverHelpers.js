import { cookies } from "next/headers";
import userModel from "@/models/User";
import { verifyAccessToken } from "./auth";

const authUser = async () => {
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
const authAdmin = async () => {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await userModel.findOne({ email: tokenPayload.email });
      if(user.role === 'ADMIN'){
        return user
      }else{
        return null
      }
    }else{
      return null
    }
  }else{
    return null
  }

  return user;
};

export { authUser, authAdmin };
