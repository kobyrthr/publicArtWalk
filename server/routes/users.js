const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require('bcrypt')

router.post("/", async (req,res)=>{

try{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        username:req.body.username,
        password:hashedPassword
    })

    const user = await newUser.save()
    res.status(200).json(user._id)

}
catch (err){
    console.log(err);
    res.status(500).json(err)
}

})

module.exports = router