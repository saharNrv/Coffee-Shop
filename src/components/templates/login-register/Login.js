import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";
import { showSwal } from "../../../utils/helperClass";
import { validateEmail, validatePassword } from "../../../utils/auth";
import { useRouter } from "next/navigation";
const Login = ({ showRegisterForm }) => {

  const router =useRouter()
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')

  const hideOtpForm = () => setIsLoginWithOtp(false)

  const signinWithPassword = async () => {
    console.log('log in');
    if (!emailOrPhone) {
      return showSwal('لطفا شماره تماس یل ایمیل را وارد کنید', 'error', 'تلاش مجدد')
    }
    const isValidEmail = validateEmail(emailOrPhone)
    if (!isValidEmail) {

      return showSwal(' ایمیل وارد شده صحیح نیست', 'error', 'تلاش مجدد')
    }
    const isValidPassword = validatePassword(password)
    if (!isValidPassword) {

      return showSwal(' رمز عبور وارد شده صحیح نیست', 'error', 'تلاش مجدد')
    }

    const user = {
      email: emailOrPhone,
      password
    }

    const res = await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
    console.log('res=>',res);

    if(res.status===200){
      swal({
        title:"با موفقیت وارد شدین",
        icon:"success",
        buttons:"ورود به پنل کاربری"
      }).then(()=>router.replace("/p-user"))
      
    }else if(res.status===422 || res.status ===401){
      showSwal("کاربری با این اطلاعات یافت نشد","error","تلاش مجدد")
    }else if(res.status===419){
      showSwal("ایمیل یا پسوورد صحیح نیست","error","تلاش مجدد")
    }
  }



  return (

    <>
      {
        !isLoginWithOtp ? (
          <>
            <div className={styles.form}>
              <input
                className={styles.input}
                type="text"
                value={emailOrPhone}
                onChange={e => setEmailOrPhone(e.target.value)}
                placeholder="ایمیل/شماره موبایل"
              />
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="رمز عبور"
              />
              <div className={styles.checkbox}>
                <input type="checkbox" name="" id="" />
                <p>مرا به یاد داشته باش</p>
              </div>
              <button className={styles.btn} onClick={signinWithPassword}>ورود</button>
              <Link href={"/forget-password"} className={styles.forgot_pass}>
                رمز عبور را فراموش کرده اید؟
              </Link>
              <button onClick={() => setIsLoginWithOtp(true)} className={styles.btn}>ورود با کد یکبار مصرف</button>
              <span>ایا حساب کاربری ندارید؟</span>
              <button onClick={showRegisterForm} className={styles.btn_light}>ثبت نام</button>
            </div>
            <Link href={"/"} className={styles.redirect_to_home}>
              لغو
            </Link>

          </>
        ) : (
          <Sms hideOtpForm={hideOtpForm} />

        )
      }

    </>
  );
};

export default Login;