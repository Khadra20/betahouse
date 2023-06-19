const express=require('express')
const  homemodel=require('../Schema/Guryo')
// const imagecontroller =require('../Controllers/imagescontrol')

const gethome=async(req,res)=>{
    try {
        const updehome=await homemodel.find();
        res.json(updehome)
    } catch (error) {
        res.json(error)
    }
}
const homepost=async(req,res)=>{
    try {
        const updatehomepost=homemodel(req.body)
        await updatehomepost.save();
        res.json("waala xareeyey xogta guriga")
    } catch (error) {
        console.log(error)
    }
}


exports.gethome=gethome;
exports.homepost=homepost
