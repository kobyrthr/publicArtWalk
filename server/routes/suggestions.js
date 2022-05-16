const router = require("express").Router()
const Suggestion = require("../models/Suggestion")

// POST ROUTE  

router.post('/suggestions', async (req, res)=>{w
    const newSuggestion = new Suggestion(req.body)
    try{
        const savedSuggestion = await newSuggestion.save()
        res.status(200).json(savedSuggestion)
    }
    catch{
        res.status(500).json(err)
    }
})

