// const express=require('express')
// const imageschema=require('../Schema/image')


// const imageget=async(req,res)=>{
//     try {
//         const getimage=await imageschema.find().populate({
//             path:"Homeid",
//             select:"address,rent,deposite"
//         });
//         res.json(getimage)
//     } catch (error) {
//         console.log("error ayaa jiro")
//     }
// }
// exports.imageget=imageget;