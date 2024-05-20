"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "@/styles/ScrollToTop.module.css";

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 105) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
       isVisible &&
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <button
            className={isVisible ? styles.buttonVisible : styles.button}
            onClick={scrollToTop}
        >
            <MdKeyboardArrowUp />
        </button>
    );
}
