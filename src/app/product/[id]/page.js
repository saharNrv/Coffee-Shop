import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";

import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import productModel from "@/models/Product";
import connectToDB from "@/configs/db";
// import { authUser } from "@/utils/auth";

const product = async ({ params }) => {
  // const user = await authUser();

  const productID = params.id
  connectToDB()
  const product = await productModel.findOne({ _id: productID }).populate("comments")
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div data-aos="fade-up" className={styles.contents}>
        <div className={styles.main}>
          <Details product={JSON.parse(JSON.stringify(product))} />
          <Gallery />
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default product;
