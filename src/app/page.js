import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Baner from "@/components/templates/index/baner/Baner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import productModel from "@/models/Product";
import { authUser } from "@/utils/serverHelpers";



export default async function Home() {

  const user = await authUser()
  const lastProducts = await productModel.find({}).sort({_id:-1}).limit(8)
  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Baner />
      <Latest products={JSON.parse(JSON.stringify(lastProducts))} />
      <Promote />
      <Articles />
      <Footer />
    </>
  )
}
