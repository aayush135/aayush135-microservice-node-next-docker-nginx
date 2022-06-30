import { findFibonacci } from "./controller"


export default (app)=>{
    

    app.get('/api/fibonacci/:num',findFibonacci)
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}