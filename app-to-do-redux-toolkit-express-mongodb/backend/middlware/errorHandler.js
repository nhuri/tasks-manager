class AppError extends Error{
    constructor(statusCode, message){
        super(message)
            this.statusCode = statusCode 
    }
}
const errorHandler  = (err, req, res, next) =>{
     const statusCode = err.statusCode || 500
     res.status(statusCode).json({
        status: 'fail',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong 😶‍🌫️'
     })
}
export {AppError}
export default errorHandler