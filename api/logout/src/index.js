import express from 'express'
import config from '../config'

const app=express()

config(app)

app.listen(5052,()=>{console.log("logout API is running on port 5052")})

export default app