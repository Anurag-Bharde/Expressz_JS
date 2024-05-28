const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS=[
  {
    username:"Anurag@gmail.com",
    password:"asjflasjlfs",
  },
  {
    username:"Pikorasko@gmail.com",
    password:"asdfghjkl",
  },
  {
    username:"harsuBhushan@gmail.com",
    password:"AryanKesu",
  }
]

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for(let i=0;i<ALL_USERS.length;i++){
    if(username==ALL_USERS[i].username  && password==ALL_USERS[i].password){
      return true;
    }
  }
   return false;
}

app.post("/signin", function (req, res) {
    const user=req.body.username;
    const pass=req.body.password;
    
    if(!userExists(user,pass)){
      return res.status(403).json({msg:"User not found"});
    }

    var token=jwt.sign({username:user},jwtPassword);
    return res.json({
      token,
    })
});

app.get("/users", function (req, res) {
  const token=req.headers.authorization;
  const decoded=jwt.verify(token,jwtPassword);
  const username=decoded.username;

  res.json({
    users: ALL_USERS.filter(function(value){
       if(value.username==username){
        console.log("Sahi hai")
        return true;
       }
       else{
        console.log("Galat hai")
        return false;
       }
    })
  })
  });

app.listen(3000)