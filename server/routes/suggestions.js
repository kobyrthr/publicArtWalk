const router = require("express").Router()
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

//PUT ROUTE
router.put('/:id', async(req,res)=>{
try {
    const updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id,
        {$set:{...req.body}},
        {new:true})
    res.send(200).json(updatedSuggestion)
} catch (error) {
    res.send(500).json(error)
}
})


router.delete('/:id/', async(req,res)=>{
    try {
        await Suggestion.findByIdAndDelete({_id:req.params.id})
        res.send("succesfully deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router