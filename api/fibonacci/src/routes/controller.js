import { fibonacci } from "./fibonacci"

export const findFibonacci=(req,res)=>{
    const num=parseInt(req.params.num)
    res.status(200)
    res.send({result:fibonacci(num)})
}