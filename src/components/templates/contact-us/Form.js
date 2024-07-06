"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { showSwal } from "@/utils/helperClass";

const Form = () => {

  const [email, setEmail] = useState('')
  const [name, setNmae] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitMessage = async (e) => {
    e.preventDefault()

    const contactMessage = {

      email,
      name,
      company,
      phone,
      message
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactMessage)
    })

    if (res.status === 201) {
      setEmail('')
      setNmae('')
      setCompany('')
      setPhone('')
      setMessage('')
      showSwal('پیام شما با موفقیت ارسال شد', 'success', 'تایید')

    }
  }


  return (
    <form className={styles.form}>
      <span>فرم تماس با ما</span>
      <p>برای تماس با ما می توانید فرم زیر را تکمیل کنید</p>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>نام و نام خانوادگی</label>
          <input type="text" value={name} onChange={e => setNmae(e.target.value)} />
        </div>
        <div className={styles.group}>
          <label>آدرس ایمیل</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>شماره تماس</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className={styles.group}>
          <label>نام شرکت</label>
          <input type="text" value={company} onChange={e => setCompany(e.target.value)} />
        </div>
      </div>
      <div className={styles.group}>
        <label>درخواست شما</label>
        <textarea name="" id="" cols="30" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </div>
      <button onClick={submitMessage}>ارسال</button>
    </form>
  );
};

export default Form;
