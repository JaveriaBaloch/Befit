const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mysql = require('mysql');
const { response } = require('express');
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

// GET user queries
app.get("/queries", (req, res) => {
    if(req.query.email) {
        const Check = "SELECT * FROM requests WHERE Email = ?";
        db.query(Check, req.query.email, (err, result) => {
            if(err) {
                console.error(err);
            }
            else {
                res.send({queries: result});
            }
        })
    }
})
// Update user data
app.put("/user", (req, res) => {
    if(req.body.email) {
        const Check = `SELECT * FROM users WHERE Email = ?`

        db.query(Check, req.body.email, (err, result) => {
            if(err) {
                // User to update doesn't exist
                console.error(err);
                res.status(410).send();
            }
            else {
                // User to update exists
                const Insert = `UPDATE users SET Name = ?, Password = ? WHERE Email = ?`;
                db.query(Insert, [req.body.username, req.body.password, req.body.email], (err, result) => {
                    if(err) {
                        console.error(err);
                        res.status(500).send();
                    }
                    else {
                        // Data has been mutated successfully
                        res.status(202).send();
                    }
                })
            }
        })
    }
    else {
        res.send("E-Mail is missing in parsed data");
    }
})



// for registrating new users
app.post("/AddUser",(req,res)=>{
    const Check = `SELECT COUNT(Email) as email FROM users WHERE Email = ?`
    db.query(Check,req.body.email,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result[0].email>0){
            console.log(result[0].email)
            res.send({user:"Email is already used"})
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
app.post("/DeleteQuery",(req,res)=>{
    const deleteQuery = "Delete from Requests where id = ?"
    db.query(deleteQuery,[req.body.id],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({msg: "deleted"})
      }
    })
})
app.post("/YourQuery",(req,res)=>{
    const select = "Select * from Requests where id = ? and email=?"
    db.query(select,[req.body.id,req.body.email],(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            res.send({query:result})
      }
    })
})
app.post("/Subscribe",(req,res)=>{
    const Check = `SELECT COUNT(email) as email FROM subscribers WHERE Email = ?`
    db.query(Check,req.body.email,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result[0].email>0){
            res.send({res:"Exist"})
        }
        else{
            const insert = "insert into subscribers (name,email) values (?,?)"
             db.query(insert,[req.body.name,req.body.email],(err,result)=>{
            if(err){
                // res.send(err)
            }
            if(result){
                res.send({res:"success"})
        }
    })
     }
    })
})
app.listen(3001,()=>{
    console.log("app is running on port 3001");
})