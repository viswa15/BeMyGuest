import JWT from 'jsonwebtoken'
// import ForeignerModel from '../models/ForeignerModel'

export const requireSignIn = async(req,res,next) =>{
    try{
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(e){
        console.log(e)
    }
}

