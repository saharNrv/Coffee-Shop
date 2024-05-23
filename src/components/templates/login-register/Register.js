import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";
import swal from "sweetalert";

const Register = ({ showloginForm }) => {

  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false)
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false)
  const hideOtpForm = () => setIsRegisterWithOtp(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async () =>{

    const newUser ={name, phone, email, password}
    const res =await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newUser)
    })
    console.log(res);
    if(res.status === 201){
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      })
    }

  }

  return (
    <>
      {
        !isRegisterWithOtp ? (
          <>
            <div className={styles.form}>
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="نام"
              />
              <input
                className={styles.input}
                type="text"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="شماره موبایل  "
              />
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="ایمیل (دلخواه)"
              />
              {isRegisterWithPass && (
                <input
                  className={styles.input}
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="رمز عبور"
                />
              )}
              <p onClick={() => setIsRegisterWithOtp(true)} style={{ marginTop: "1rem" }} className={styles.btn}>
                ثبت نام با کد تایید
              </p>
              <button onClick={() => {
                if (isRegisterWithPass) {
                  signUp()
                } else {

                  setIsRegisterWithPass(true)
                }
              }}
                style={{ marginTop: ".7rem" }}
                className={styles.btn}>
                ثبت نام با رمزعبور
              </button>
              <p onClick={showloginForm} className={styles.back_to_login}>برگشت به ورود</p>
            </div>
            <p className={styles.redirect_to_home}>لغو</p>
          </>
        ) : (

          <Sms hideOtpForm={hideOtpForm} />
        )
      }

    </>
  );
};

export default Register;