const Users = require('../Models/User.js')
const bcrypt = require('bcrypt')

module.exports.getSignup = (req,res)=>{
    res.send('Signup ')
}

module.exports.postSignup = async (req,res)=>{
    const {name , username , password} = req.body;
    console.log(name, username , password)
    try{
        let user = await Users.findOne({username});
        if(user){
            res.send('User already exist!!')
        }

        //generating the hash password to store in DB
        let hash = await bcrypt.hash(password , 10);

        let signupUser = await Users.create({name , username , password:hash})
        if(signupUser === true){
            res.send('User SignedUp successfully')
        }
        else{
            res.send("Something went wrong! Please try again later.")
        }
        
        
        
    }
    catch(err){
        // res.send("Something went wrong! Please try again later.")
        console.log(err);
    }
}
