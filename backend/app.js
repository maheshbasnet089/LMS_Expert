const express = require('express')
const app = express()
const cors = require('cors')
const authRoute = require("./routes/authRoute")
const passport = require("passport")
const { users } = require('./model/index')
const generateToken = require('./services/generateToken')


app.use(passport.initialize())
app.use(passport.session())

require("./model/index")
app.use(cors({
    origin : "*"
}))

app.use(express.json())


passport.serializeUser(function(user,cb){
    cb(null,user)  // cb(error,success) --> cb(error)
 })
 passport.deserializeUser(function(obj,cb){
    cb(null,obj)
 })
var userProfile
 let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
 passport.use( new GoogleStrategy({
    clientID : "865350569271-p14232dub2opk00soi7e6rp88ktn7cjm.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "http://localhost:3000/auth/google/callback"
},
function(accessToken,refreshToken,profile,done){
 console.log(profile)
 userProfile = profile  
 return done(null,userProfile)

}
))

app.get("/auth/google",passport.authenticate("google",{scope : ['profile','email']}) )

app.get("/auth/google/callback",passport.authenticate("google",{
    failureRedirect : "http://localhost:3000"
}),
async function(req,res){
    
  const userGoogleEmail=  userProfile.emails[0].value
    // check if google lay deko email already table ma exists xa ki nae vanerw  
  const user = await users.findOne({
    where : {
        email : userGoogleEmail
    }
  })
 console.log(userProfile)
  if(user){

 const token = generateToken(user)
res.redirect("http://localhost:5173/google?token=" + token)

  }else{
    // register the user 
   const user =  await users.create({
        email : userGoogleEmail,
        googleId  : userProfile.id,
        firstName : userProfile.name.givenName,
        lastName : userProfile.name.familyName,

    })
    

    const token = generateToken(user)
    
    res.redirect("http://localhost:5173/google?token=" + token)
  }

}
)

app.use("",authRoute)

const port = 3000
app.listen(port,()=>{
    console.log("Server has started at port", port)
})