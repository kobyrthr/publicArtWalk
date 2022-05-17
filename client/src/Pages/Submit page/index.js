import React,{useState,useEffect} from "react"
import axios from "axios"

const SubmitPage = ()=>{
const slash = "http://localhost:4000/api/suggestions"
const [suggestions, setSuggestions] = useState([])


const getSuggestions = async()=>{
    try {
        const allSuggestions = await axios.get(slash)
        setSuggestions(allSuggestions.data)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    getSuggestions()
},[])


const suggestionDelete = async (id)=>{
    try {
        // e.preventDefault()
        const deletedSuggestion = await axios.delete(slash+`/${id}`)
        console.log("Deleted",deletedSuggestion)
        getSuggestions()
        // console.log("Delete",id)
    } catch (error) {
        console.log(error)
    } 
}

const suggestionEdit = async (id)=>{
    try {
        // const updateSuggestion = await axios.update(slash+`/edit/${id}`)
        console.log("Edit",id)
        // console.log(updateSuggestion)        
    } catch (error) {
        console.log(error)
    } 
}

    return(
        <div className="row sgstPage">

            <form className="columns six suggestForm" action="/" method="POST">
                <h1> Suggest A Location</h1>
                <label for="title">Your Name</label>
                <input type="text" name="title"></input>
                <label for="Street">Street</label>
                <input type="text" name="Street"></input>
                <label for="Zip Code">Zip Code</label>
                <input type="text" name="Zip Code"></input>
                <label for="Artist">Artist</label>
                <input type="text" name="Artist"></input>
                <label for="">Details</label>
                <textarea type="text" name="Details"></textarea>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>


            </form>

                <div className="columns six loc-list-wrapper">
                    <h3>Suggested Locations</h3>
                    <div className = "loc-list">

                    {
                        suggestions.map((suggestion,index)=>{
                            return <li>

                                {suggestion.Street}, 
                                {suggestion.Zip_Code}<br></br>
                                Details: {suggestion.Details}<br></br>
                                Status: {suggestion.Status}
                                {/* <form action={`/suggestions/${suggestion._id}`}>
                                </form> */}
                                <button onClick={(e)=>suggestionDelete(suggestion._id)}>Delete</button>
                                <button onClick={(e)=>suggestionEdit(suggestion._id)}>Edit</button>
                            </li>
                        })
                    }

                        <div className="icn-btn"></div>
                        <div className="icn-btn"></div>
                    </div>
                </div>
        </div>
    )
}

export default SubmitPage