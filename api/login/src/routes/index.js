import { login } from "./controller"


export default (app)=>{
    
    app.post('/api/login',login)
    
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}