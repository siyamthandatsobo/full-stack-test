import mysql from 'mysql2'

import { config } from 'dotenv'
config()
//whenever you use process.env you need config
//creates a connection to your database and make a new connection everytime
//stores the connection you used  and also create it but when u send a get req it will rememeber that connection
const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    //password you installed when u installed mysql
    password:process.env.PASSWORD,
    database:process.env.DATABASE
    //promise allows you to use asynchronous 
}).promise()
 const getProducts=async()=>{
    //use destructuring to return the first array by putting square brackets around result
    const [result] =await pool.query(`
    SELECT * FROM products; 
    `)
    return result
   
}
const getProduct=async(prodID)=> {
    console.log(prodID);
    const [result]=await pool.query(`
    SELECT * FROM products
    WHERE prodID = ?
    `,[prodID])
//use a prepared statement for best practice
return result
}
const addProduct = async( prodName , quantity ,amount ,category ,prodUrl
    )=>{
const [product] = await pool.query(`
INSERT INTO products (prodName , quantity ,amount ,category ,prodUrl)
VALUES (?,?,?,?,?)`,[prodName , quantity ,amount ,category ,prodUrl])
return getProduct(product.insertId)
}
const deleteProduct = async(prodID)=>{
const [deleted]=await pool.query(`
DELETE FROM products where prodID = ?
`,[prodID])
return getProducts(deleted) 
}
const editProduct = async(prodName , quantity ,amount ,category ,prodUrl,prodID)=>{
    const [edited]=await pool.query(`
    UPDATE products
SET prodName=? , quantity=? ,amount=? ,category=? ,prodUrl=?
WHERE (prodID=?)
    `,[prodName , quantity ,amount ,category ,prodUrl,prodID])
    return edited
}

//console.log(await deleteProduct('uluso'))
//console.log(await editFriend(4,'tsobo',3))
// const addUser=async(username,password)=>{
//     await pool.query(`
//     INSERT INTO users (username, password) VALUES (?,?)`,[username,password])
// }
// const checkUser = async(username)=>{
//     const [[{password}]]=await pool.query(`
//     SELECT password FROM Users WHERE username = ? 
//     `,[username])
//     return password
// } 
//console.log(await(checkUser('siyamthandatsobo@gmail.com')))
export {getProducts,getProduct,addProduct,editProduct,deleteProduct}

