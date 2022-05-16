const router = require("express").Router()
const Pin = require("../models/Pin")
const Suggestion = require("../models/Suggestion")

// POST ROUTE  

router.post('/', async (req, res)=>{
    const newSuggestion = new Suggestion(req.body)
    try{
        const savedSuggestion = await newSuggestion.save()
        res.status(200).json(savedSuggestion)
    }
    catch{
        res.status(500).json(err)
    }
})


//GET ROUTE
router.get('/', async(req,res)=>{
    try {
        const allSuggestions = await Suggestion.find()
        res.status(200).json(allSuggestions)
    } 
    catch (error) {
        res.status(500).json(err)
    }
})
module.exports = router