import express from 'express';
// import bcrypt from 'bcrypt' ;
import cookieparser from 'cookie-parser';
// import jwt from 'jsonwebtoken'
import {config} from 'dotenv';
import cors from 'cors' 
// import {addUser,checkUser} from './model/database.js'
//use destructuring

 import friendsRouter from './routes/products.js'

config();
const PORT = process.env.PORT

const app = express();//initialise the server
app.use(cors()) //middlware cross origin resource sharing
app.use(express.json()) //newer version comes with body parser 
app.use(cookieparser())
app.use(express.static('views')) //when req is sent to server it will load the page and  help front end user to see the path

// const authenticate = (req,res,next)=>{
//     let {cookie} =req.headers
//     let tokenInheader=cookie && cookie.split('=')[1]
//     if(tokenInheader===null) res.sendStatus(403)
//     //console.log(tokenInheader)
//     jwt.verify(tokenInheader,process.env.SECRET_KEY,(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.user =user
//         next()
//         })
// }
app.use('/products',friendsRouter) 

// app.post('/users',(req,res)=>{
//     const {username,password}= req.body
//     bcrypt.hash(password,10,async(err,hash)=>{
//         if(err) throw err
//         await addUser(username,hash)
//         res.send({
//             msg: "you have created an acccount"
            
//         })
//     })
// })

// const auth =async(req,res,next) => {
    
//     const {username,password} = req.body
//     const hashedPassword = await checkUser(username)
//     bcrypt.compare(password,hashedPassword, (err,result)=>{
//         if(err) throw err
//         if(result === true){
//             const token =jwt.sign({username:username},
//                 process.env.SECRET_KEY,{expiresIn:'1h'})
//                 console.log(token);
           
//             res.json({
//                 msg:'you have logged in',
//                 token:token
//             })
//             next()
//         }
//         else{
//             res.send({
//                 msg:'the password does not match'})
//             }
            
//         })
       
//     }
    
//         app.post('/login',auth,(req,res)=>{
      
//         })
        
        
        app.listen( PORT,()=>{
            console.log(`The local host is on http://localhost:${PORT}`)
        })
        