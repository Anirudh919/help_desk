import { verifyToken } from "../JWT/jwt.js"
import { User } from "../Models/user.model.js"

export async function isAuthenticated(req,res,next,role){
    const token=req.cookies.token

    
    if(!token) return res.status(401).json({message:"Unauthorized Access"})
    try {
        const id=verifyToken(token)
        const user=await User.findById(id.id).select("-password -salt")
        
        

        if(!user) return res.status(401).json({message:"Unauthorized Access"})
        if(user.role !="admin" || user.role !='agent') return res.status(403).json({message:"Forbidden Access"})

        req.user=user
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized Access"})
    }
}           



export async function validateUser(req,res,next){
    const token=req.cookies.token

    
    if(!token) return res.status(401).json({message:"Unauthorized Access"})
    try {
        const id=verifyToken(token)
        const user=await User.findById(id.id).select("-password -salt")
        
        

        if(!user)  return res.status(401).json({message:"Unauthorized Access"})

        req.user=user
        next()

        
    }  catch (error) {
        return res.status(401).json({message:"Unauthorized Access"})
    }
}