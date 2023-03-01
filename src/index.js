
const express=require("express")
const data=require("./data.js")
const server=express()

server.get("/",(req,res)=>{
  res.send("Welcome to my favaro movies")
})
server.get("/movies",(req,res)=>{
  res.send("You can find perfect movies ")
})
server.get("/movies/:id",(req,res)=>{
const {id}=req.params
 const moviesId=data.find((movies)=>movies.id===parseInt((id)))
 if(moviesId){
  res.status(200).json(moviesId)
 }
 else{
  res.status(404).send("nothing found")
 }
})
server.listen(3025,()=>{
  console.log("everything is works");
})


