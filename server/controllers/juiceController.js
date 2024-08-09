import Juice from "../models/juiceModel.js";
import cloudinary from 'cloudinary'
import getDataUri from "../utils/dataUri.js";

export const createJuice =async(req,res)=>{
   try {
    const { name, price, description, quantity, category } = req.body
    if(!name || !price || !description || !quantity || !category ){
        return res.status(400).json({
            message:'All fields are required'
        })
    }
    const file = req.file 
    const fileUri = getDataUri(file)
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content)

     Juice.create({
        name,
        price,
        description,
        image:{
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        },
        quantity,
        category
     })
    
     res.status(201).json({
        message:'Product created successfully'
     })
   
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message:'Internal Server Error'
    })
   }
}


export const getAllJuices =async(req,res)=>{
  try {
     const products = await Juice.find({})
     res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message:'Internal Server Error'
    })
  }
}

export const getSingleJuice =async(req,res)=>{
    try {
        const { id } = req.params
        const product = await Juice.findById(id)
        if(!product){
            return res.status(400).json({
                message:'No Product found'
            })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message:'Internal Server Error'
        })  
    }
}


// export const updatejuice=async(req,res)=>{
//    try {
//     const { id } = req.params
//     const {name, price, description, quantity, category } = req.body
//     const file = req.file
//     const juiceData = await Juice.findById(id)
//     const fileUri = getDataUri(file)
//     const mycloud = await cloudinary.v2.uploader.upload(fileUri?.content)
//     await cloudinary.v2.uploader.destroy(juiceData.image.public_id)

//     if(name) juiceData.name = name
//     if(price) juiceData.price = price
//     if(description) juiceData.description = description
//     if(quantity) juiceData.quantity = quantity
//     if(category) juiceData.category = category
//     if(file)  juiceData.image ={
//         public_id:mycloud.public_id,
//         url:mycloud.secure_url
//     }
//     await juiceData.save()
//     res.status(201).json({
//         message:'Product Updated Successfully'
//     })
//    } catch (error) {
//     console.log(error)
//     res.status(500).json({
//         message:'Internal Server Error'
//     })  
//    }
// }




export const updateJuice = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, description, quantity, category } = req.body;
      const file = req.file;
  
      // Ensure the ID is valid
      if (!id) {
        return res.status(400).json({ message: 'Invalid ID' });
      }
  
      // Find the existing juice data
      const juiceData = await Juice.findById(id);
      if (!juiceData) {
        return res.status(404).json({ message: 'Juice not found' });
      }
  
      // Check if file is provided
      if (file) {
        // Ensure the file has originalname and buffer properties
        if (!file.originalname || !file.buffer) {
          return res.status(400).json({ message: 'Invalid file data' });
        }
  
        // Get Data URI
        const fileUri = getDataUri(file);
        if (!fileUri || !fileUri.content) {
          return res.status(400).json({ message: 'Failed to process file' });
        }
  
        // Upload new image to Cloudinary
        const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  
        // Delete old image from Cloudinary
        if (juiceData.image && juiceData.image.public_id) {
          await cloudinary.v2.uploader.destroy(juiceData.image.public_id);
        }
  
        // Update image details
        juiceData.image = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url
        };
      }
  
      // Update other fields if provided
      if (name) juiceData.name = name;
      if (price) juiceData.price = price;
      if (description) juiceData.description = description;
      if (quantity) juiceData.quantity = quantity;
      if (category) juiceData.category = category;
      
      // Save the updated juice data
      await juiceData.save();
  
      res.status(201).json({
        message: 'Product Updated Successfully',
        data: juiceData
      });
    } catch (error) {
      console.log('Error updating juice:', error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  };



  export const deleteJuice =async(req,res)=>{
     try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: 'Invalid ID' });
          }
        const juicedata =  await Juice.findById(id)
        if(juicedata.image.public_id && juicedata.image.url){
            await cloudinary.v2.uploader.destroy(juicedata.image.public_id)
        }
         await Juice.deleteOne({_id:id})
         res.status(201).json({
            message: 'Product Deleted Successfully'
          });
     } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Internal Server Error'
        });
     }
  }