const router = express.Router()
const User = require("../models/User")
const bcrypt = require('bcrypt')

router.post("/register", async (req,res)=>{

try{

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        username:res.body.username,
        password:hashedPassword
    })

    const user = await newUser.save()
    res.status(200),json(user._id)

}
catch (err){
res.status(500).json(err)
}

})