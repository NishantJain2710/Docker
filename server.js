import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello Docker bind mount test")
})


const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})