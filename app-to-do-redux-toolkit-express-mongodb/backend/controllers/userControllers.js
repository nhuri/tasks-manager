import asyncHandler from 'express-async-handler'
import { AppError } from '../middlware/errorHandler.js'
import User from '../models/userModel.js'
import { generateToken } from '../middlware/generateToken.js'


const registerUser = asyncHandler (async(req, res, next)=>{
    const {name, email, password} = req.body
    if (!name || !email ||!password) return next(new AppError(403, 'Missing details'))
    const user = await User.create({name, email, password})
 const token = generateToken(user._id)
 console.log(token);
 

    res.cookie('jwt', token, {
        httpOnly:true,
        sameSite:'none',
        secure:true
    }) 
   res.status(201).json({
    name: user.name
   })
})

export {registerUser}