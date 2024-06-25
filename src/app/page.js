import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Baner from "@/components/templates/index/baner/Baner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import userModel from "../../models/User";


export default async function Home() {

  const token =cookies().get('token')
  let user=null

  if(token){
    const tokenPayload= verifyAccessToken(token.value)
    if(tokenPayload){
      user = await userModel.findOne({email:tokenPayload.email})
    }
  }
  return (
    <>
      <Navbar isLogin={user} />
      <Baner/>
      <Latest/>
      <Promote/>
      <Articles/>
      <Footer/>
    </>
  )
}
