"use client";
import { showSwal } from "@/utils/helperClass";
import React, { useEffect,useState } from "react";
import { CiHeart } from "react-icons/ci";

 function AddToWishlist({productID}) {

  const  [ user, setUser ] = useState({});

  useEffect(()=>{

    const authUSer= async ()=>{
      const res = await fetch('/api/auth/me')
     
      if(res.status===200){
        const data= await res.json()
        setUser(data)
      }

    }
    
    authUSer()
    

  },[])
  const addToWishlist = async (event) => {
    event.preventDefault()
   if(!user?._id){
   return showSwal("ابتدا باید وارد شوید", "error", "تلاش مجدد")
   }

   const wish = {
    user:user._id,
    product:productID
   }

   const res = await fetch('/api/wishlist',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(wish)
   })
   
   if(res.status === 201){
    showSwal("محصول مورد نظر به علاقه مندی ها اضافه شد","success","اکی")
   }
    
  };

  return (
    <div onClick={addToWishlist}> 
      <CiHeart />
      <a href="/">افزودن به علاقه مندی ها</a>
    </div>
  );
}

export default AddToWishlist;