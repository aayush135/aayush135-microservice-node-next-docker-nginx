import  { signup } from './controller'

export default (app)=>{
    

    app.post('/api/signup',signup)
    
    app.get('/*',(req,res)=>{res.sendStatus(404)})
}