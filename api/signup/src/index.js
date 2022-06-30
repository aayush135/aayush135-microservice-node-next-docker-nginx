import express from 'express'
import config from '../config'

const app=express()

config(app)

app.listen(5053,()=>{console.log("signup API is running on port 5053")})

export default app