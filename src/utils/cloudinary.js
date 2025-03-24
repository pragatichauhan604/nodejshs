import {v2 as cloudinary} from 'cloudinary';
import { log } from 'console';
import fs from 'fs';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

 // Upload an image
 const uploadOnCloudinary = async (localFilePath)=>{
    try{
       if (!localFilePath) return null
// Uplod th file on cloudinary
  // Upload an image
  const uploadResult = await cloudinary.uploader
  .upload(
      localFilePath, {
         resource_type:"auto",
      }
  )

console.log(uploadResult.url,"file uploaded successfully on cloudinary");
return uploadResult
    }catch(error){
console.log(error);
fs.unlinkSync(localFilePath)// remove the locally save temerary file as upload operation got failed
return null
    }
 }

 
 export {uploadOnCloudinary} 