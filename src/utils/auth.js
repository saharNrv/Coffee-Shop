import { sign, verify } from "jsonwebtoken"

const { hash, compare } = require("bcryptjs")

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword)
    return isValid
}

const generateAccessToken = (data) => {

    const token = sign({ ...data }, process.env.privateKeyAccessToken,{
        expiresIn :'60d'
    })
    return token
}

const verifyAccessToken = (token) => {
    try {
        const tokenPayload = verify(token, process.env.privateKeyAccessToken)
        return tokenPayload

    } catch (err) {
        console.log('Verify Access Token Error =>', err);
    }
}

const generateRefreshToken =( data)=>{
    const token = sign({ ...data }, process.env.privateKeyRefreshToken,{
        expiresIn:'15d'
    })
    return token
}

const validateEmail = (email) =>{
    
    const pattern =/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g
    return pattern.test(email)
}
const validatePhone = (phone) =>{
    
    const pattern =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
    return pattern.test(phone)
}
const validatePassword = (password) =>{
    
    const pattern =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
    return pattern.test(password)
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validateEmail,
    validatePhone,
    validatePassword
}