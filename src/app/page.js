import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Baner from "@/components/templates/index/baner/Baner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";


export default function Home() {
  return (
    <>
      <Navbar />
      <Baner/>
      <Latest/>
      <Promote/>
      <Articles/>
      <Footer/>
    </>
  )
}
