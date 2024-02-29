const { users } = require("../model")
const bcrypt = require('bcrypt')
const generateToken = require("../services/generateToken")
exports.registerUser = async(req,res)=>{
    const {firstName,lastName,email,password} = req.body 
    const [userFound] = await users.findAll({
        where : {
            email
        }
    })
    if(userFound){
        return res.status(400).json({
            message : "User already exist"
        })
    }
    await users.create({
        firstName,
        lastName,
        email,
        password : bcrypt.hashSync(password,8)
    })

    res.status(200).json({
        message : "Registered successfully"
    })
}

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body 
   const userEmailFound =  await users.findAll({
        where : {
            email
        }
    })
    if(userEmailFound.length > 0 ){
        const isMatched =  bcrypt.compareSync(password,userEmailFound[0].password)
        if(isMatched){
            const token = generateToken(userEmailFound[0])
             res.status(200).json({
                message : "Logged in sucsess",
                token
            })
        }else{
            res.status(400).json({
                message : "invalid password"
            })
        }
    }else{
        res.status(400).json({
            message : "Noone registered with this email"
        })
    }
}
