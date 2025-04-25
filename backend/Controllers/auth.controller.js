import bcrypt from "bcryptjs";
import { User } from "../Models/user.model.js";
import { generateToken } from "../JWT/jwt.js";


// signup user
export async function signup(req,res){
    const {name,email,password,role}=req.body;
    console.log({name,email,password,role})
    try {
        if(!name || !email ||!password) throw new Error("All fields are requried");

        if(password.length<6) throw new Error("Password must be at least 6 characters  long");

        let user=await User.findOne({email})
        if(user) throw new Error("User already exists with this email")

            // create user

        user=await User.create({name,email,password, ...(role && { role }) })
        user.salt=bcrypt.genSaltSync(10) 
        user.password=bcrypt.hashSync(user.password,user.salt)  
        await user.save()

        const token=generateToken(user._id)
        res.cookie("token",token)
        //     ,{
        //     httpOnly:true,
        //     secure:true,    
        //     sameSite:"strict",
        //     maxAge:1000*60*60*24*5 // 5 days
        // })

        return res.status(201).json({message:"User created successfully",
            user,token})

        


        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }

}


// login user
export async function login(req,res){
    const {email,password}=req.body;

    try {
        if(!email || !password) throw new Error("All fields are requried");
        let user=await User.findOne({email})

        if(!user) throw new Error("User not found with this email")
        const isPasswordMatch=bcrypt.compareSync(password,user.password)
        if(!isPasswordMatch) throw new Error("Invalid password")

// generate token and return it in response
const token=generateToken(user._id)
res.cookie("token",token)
//     {
//     httpOnly:true,
//     secure:true,    
//     sameSite:"strict",
//     maxAge:1000*60*60*24*5 // 5 days
// })


            return res.status(200).json({message:"Login successfully",user,token})
        
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

export async function getUsers(req,res){
    try { 
        let users=await User.find({}).select("-password -salt")

    return res.status(200).json({message:"Users Fetched successfully",
        users,
        success:true})
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({message:error.message})
        
    }
   

}




export async function getUserById(req, res) {
    try {
        const { id } = req.params;
        
        const user = await User.findOne({_id: id});

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}   





export async function updateUserById(req,res){


  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully',
        updatedUser,
       success:true });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


export async function Logout(req,res) {
    try {
        const token=req.cookies.token;
        if(token){
            res.clearCookie('token')
        }

        res.json({message:"logout Successfully",success:true})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

