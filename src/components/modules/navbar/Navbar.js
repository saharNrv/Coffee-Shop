import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <main >
            <div>
                <Link href='/'>
                    <img src="/images/logo_light.png" alt="Logo" />
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
                <li>
                    <Link href="/login-register">ورود \ عضویت</Link>
                </li>
                {/* start My-account section */}
                {/* <div className={style.dropdown}>
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

                </div> */}
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
