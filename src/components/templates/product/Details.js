"use client"
import { FaFacebookF, FaRegStar, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import AddToWishlist from "./addToWishlist";
import { useState } from "react";
import { showSwal } from "@/utils/helperClass";

const Details = ({ product }) => {

  const [count, setCount] = useState(1)

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    if (cart.length) {
      const isInCart = cart.some((item) => item.id === product._id)
      if (isInCart) {
        cart.forEach(item => {
          if (item.id === product._id) {
            item.count = item.count + count
          }
          localStorage.setItem("cart", JSON.stringify(cart))
          showSwal(" محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم")

        });
      } else {
        const cartItem = {
          id: product._id,
          title: product.title,
          price: product.price,
          count
        }
        cart.push(cartItem)
        localStorage.setItem("cart", JSON.stringify(cart))

      }
    } else {
      const cartItem = {
        id: product._id,
        title: product.title,
        price: product.price,
        count
      }
      cart.push(cartItem)
      localStorage.setItem("cart", JSON.stringify(cart))
      showSwal(" محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم")
    }

  }

  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb
        title={
          product.title
        }
      />
      <h2>
        {
          product.title
        }
      </h2>

      <div className={styles.rating}>
        <div>
          {
            new Array(product.score).fill(0).map((item, index) => (

              <FaStar key={index} />
            ))
          }
          {/* product.score */}
          {
            new Array(5 - product.score).fill(0).map((item, index) => (

              <FaRegStar key={index} />
            ))
          }
        </div>
        <p>(دیدگاه {product.comments.length} کاربر)</p>
      </div>

      <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      <span className={styles.description}>
        {
          product.shortDescription
        }
      </span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>موجود در انبار</p>
      </div>

      <div className={styles.cart}>
        <button onClick={addToCart}>افزودن به سبد خرید</button>
        <div>
          <span onClick={() => setCount(count - 1)}>-</span>
          {count}
          <span onClick={() => setCount(count + 1)}>+</span>
        </div>
      </div>

      <section className={styles.wishlist}>
        <AddToWishlist productID={product._id} />

        <div>
          <TbSwitch3 />
          <a href="/">مقایسه</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>شناسه محصول: GOLD Nespresso Compatible capsule</strong>

        <p>
          <strong>برچسب:</strong> {product.tags}
        </p>
      </div>

      <div className={styles.share}>
        <p>به اشتراک گذاری: </p>
        <a href="/">
          <FaTelegram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaPinterest />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;
