import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { sendToken } from "../utils/sendToken.js"
export const register=async(req,res)=>{
 try {
    const { firstName, lastName, email, password } = req.body
    if(!firstName || !lastName || !email || !password){
      return res.status(400).json({
        message:'All fields are required'
      })  
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(401).json({
            message:'User Already exists try new email'
          })  
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
     })
        sendToken(res,user,'registered successfully',201)

 } catch (error) {
  console.log(error)
    res.status(500).json({
        message: 'Internal Server Error'
      });  
 }
}



export const Login=async(req,res)=>{
  try {
     const { email, password } = req.body
     if(!email || !password){
       return res.status(400).json({
         message:'All fields are required'
       })  
     }
     const user = await User.findOne({email})
     if(!user){
         return res.status(401).json({
             message:'Invalid email & password'
           })  
          }
     const comparePassword = await bcrypt.compare(password,user.password)
     if(!comparePassword){
      return res.status(401).json({
        message:'Invalid email & password'
      })  
     }
    sendToken(res,user,`Welcome back ${user.firstName}`,201)
 
  } catch (error) {
   console.log(error)
     res.status(500).json({
         message: 'Internal Server Error'
       });  
  }
 }
 
//  export const updateUser = async(req,res)=>{
//       try {
//        const { firstName, lastName, email } = req.body;
//        const currentUser = await User.findById(req.user._id)
//        if (!currentUser) {
//         return res.status(404).json({ message: 'user not found' });
//       }
//         if(currentUser) currentUser.firstName = firstName
//         if(currentUser) currentUser.lastName = lastName
//         if(currentUser) currentUser.email = email
//         await currentUser.save()
//         res.status(201).json({
//           message: 'User Updated Successfully',
//         });
//       } catch (error) {
//         console.log(error)
//         res.status(500).json({
//           message: 'Internal Server Error'
//         });  
//       }
//  }


export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const currentUser = await User.findById(req.user._id);
    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Only update fields if they are present in the request body
    if (firstName !== undefined) currentUser.firstName = firstName;
    if (lastName !== undefined) currentUser.lastName = lastName;
    if (email !== undefined) currentUser.email = email;

    await currentUser.save();

    res.status(200).json({
      message: 'User Updated Successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const ChangePassword =async(req,res)=>{
  try {
    const { oldPassword, newPassword } = req.body
    const currentUser = await User.findById(req.user._id)
    const isCompare = bcrypt.compare(oldPassword,currentUser.password)
    if(!isCompare){
      return res.status(401).json({ message: 'Incorrect Old Password' });
    }
    const newhashPassword = await bcrypt.hash(newPassword,10)
    currentUser.password = newhashPassword
    await currentUser.save() 
    res.status(200).json({
      message:'password changed successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}


export const getMyProfile=async(req,res)=>{
   try {
    const user = await User.findById(req.user._id)
    if(!user){
      return res.status(401).json({
        message:'Invalid User'
      })
    }
    res.status(200).json(user)
    
   } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
   }
}

 export const logoutUser =async(req,res)=>{
    try {
      await res.cookie('token',null,{
        expires: new Date(Date.now()),
        secure:true,
        sameSite:'none'
      }).json({
        message:'Logout Successfully'
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
          message: 'Internal Server Error'
        });  
    }
 }






