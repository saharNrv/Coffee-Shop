"use client";
import { showSwal } from "@/utils/helperClass";
import styles from "./product.module.css";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import swal from "sweetalert";
const Card = ({ price, score, name ,productID}) => {

  console.log(score);
  
  
  const removeProduct = () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then( async (result) => {
      if(result){

        const res= await fetch(`/api/wishlist/${productID}`,{
          method:'DELETE'
        })

        console.log(res);
        if(res.status===200){
          showSwal("محصول با موفقیت حذف شد", "success", "تایید")
          location.reload()

        }

      }
    });
  };

  return (
    <div className={styles.card}>
      <Link href={"/product/123"}>
        <img
          width={283}
          height={283}
          src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
          alt=""
        />
      </Link>
      <p dir="rtl">{name}</p>
      <div>
        <div>
          {/* score===3 */}
          {new Array(score ? score: 0).fill(0).map((item, index) => ( 
            <IoMdStar key={index} />
          ))}
          {new Array(score ?5 - score :0).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <span>{price.toLocaleString()} تومان</span>
      </div>
      <button onClick={() => removeProduct(null)} className={styles.delete_btn}>
        حذف محصول{" "}
      </button>
    </div>
  );
};

export default Card;
