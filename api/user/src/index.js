import express from 'express'
import config from '../config'

const app=express()

config(app)

app.listen(5054,()=>{console.log("useer API is running on port 5054")})

export default app