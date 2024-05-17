import Navbar from "@/components/modules/navbar/Navbar";
import Baner from "@/components/templates/index/baner/Baner";
import Latest from "@/components/templates/index/latest/Latest";


export default function Home() {
  return (
    <>
      <Navbar />
      <Baner/>
      <Latest/>
    </>
  )
}
