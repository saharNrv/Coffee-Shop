"use client"
import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


export default function Navbar({isLogin}) {

    const [fixTop,setFixTop]=useState(false)

    useEffect(()=>{

        const fixNavbarToTop=()=>{
            const currentScroll =window.pageYOffset
            if(currentScroll>105){
                setFixTop(true)
            }else{
                setFixTop(false)
            }
        }

        window.addEventListener('scroll',fixNavbarToTop)

        return ()=>window.removeEventListener('scroll',fixNavbarToTop)

    },[])

  return (
    <nav className={fixTop ?style.navbar_fixed :style.navbar}>
        <main >
            <div>
                <Link href='/'>
                    <img src="/images/logo.png" alt="Logo" />
                </Link>
            </div>

            <ul className={style.links}>
                <li>
                    <Link href="/">صفحه ی اصلی</Link>
                </li>
                <li>
                    <Link href="/category">فروشگاه</Link>
                </li>
                <li>
                    <Link href="/blog">وبلاگ</Link>
                </li>
                <li>
                    <Link href="/contact-us">تماس با ما</Link>
                </li>
                <li>
                    <Link href="/about-us">درباره ی ما</Link>
                </li>
                <li>
                    <Link href="/rules">قوانین</Link>
                </li>
                {
                    isLogin?(
                        <li>
                        <Link href="/login-register">ورود \ عضویت</Link>
                    </li>
                    ):(
                        <div className={style.dropdown}>
                        <Link href="p-user">
                            <IoIosArrowDown className={style.dropdown_icons}/>
                            حساب کاربری
                            </Link>
                        <div className={style.dropdown_content}>
                            <Link href='p-user/orders'>سفارشات</Link>
                            <Link href='/p-user/tickets'>تیکت های پشتیبانی</Link>
                            <Link href='p-user/wishlist'>علاقه مندی ها</Link>
                            <Link href='p-user/account-details'>جزیات اکانت</Link>
    
                        </div>
    
                    </div>
                    )
                }
               
                {/* start My-account section */}
               
                {/* finish My-account section */}

            </ul>

            <div className={style.navbar_icons}>
                <Link href='/cart'>
                    <FaShoppingCart/>
                    <span>1</span>
                </Link>
                <Link href='wishlist'>
                    <FaRegHeart/>
                    <span>1</span>
                </Link>
            </div>

        </main>
    </nav>
  );
}
