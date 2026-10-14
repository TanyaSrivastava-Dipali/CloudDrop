import express from "express";
const app=express();
app.get("/",(req,res)=>{
res.status(200).json(
    {
        success:true,
        message:"Welcome to my Cloud Drop application"
    }
)
});

export default app;