const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user:'Befit',
    password:'Potsdam!sGr8',
    database:'Befit',
    port: 3306
})
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

// for registrating new users
app.post("/AddUser",(req,res)=>{
    const Check = `SELECT COUNT(Email) as email FROM users WHERE Email = ?`
    db.query(Check,req.body.email,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result[0].email>0){
            console.log(result[0].email)
            res.send({user:"Already Taken Exist"})
        }
        else{
            const Insert = `insert into users(Name,Email,Password) value (?,?,?)`
            db.query(Insert,[req.body.name,req.body.email,req.body.password],(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    db.query('SELECT * from customers where email=?',req.body.email,(err,results)=>{
                        
                        res.send({user:"Account is created successfully"})
                    })
                    
                }
            })
            console.log(req.body)
        }
    })
})
app.post("/Login",(req,res)=>{
    const Check = `SELECT * FROM users WHERE Email = ? and Password=?`
    db.query(Check,[req.body.email,req.body.password],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({user: result})
      }
    })

})
app.post("/SendMessage",(req,res)=>{
    const Insert = `Insert into Contact_Us(username,email,msg) values (?,?,?)`
    console.log(req.body)
    db.query(Insert,[req.body.username,req.body.email,req.body.msg],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({user: result})
      }
    })

})
app.post("/DeitQuery",(req,res)=>{
    const Insert = `Insert into requests(name,email,request,type) values (?,?,?,?)`
    console.log(req.body)
    db.query(Insert,[req.body.username,req.body.email,req.body.msg,req.body.plan],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({user: result})
      }
    })

})
app.post("/TrainningQuery",(req,res)=>{
    const Insert = `Insert into requests(name,email,request,type) values (?,?,?,?)`
    console.log(req.body)
    db.query(Insert,[req.body.username,req.body.email,req.body.msg,req.body.plan],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({user: result})
      }
    })

})
app.post("/YourQueries",(req,res)=>{
    const select = "Select * From Requests where email = ? order by `timestamp`"
    db.query(select,[req.body.email],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({queries: result})
      }
    })

})
app.listen(3001,()=>{
    console.log("app is running")
})