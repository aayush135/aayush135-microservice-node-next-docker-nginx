import express from 'express'
import config from '../config'

const app=express()

config(app)

app.listen(5051,()=>{console.log("login API is running on port 5051")})

export default app