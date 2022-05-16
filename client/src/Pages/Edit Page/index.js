import React,{useState,useEffect} from "react"
import axios from "axios"

const SubmitPage = ()=>{
const slash = "http://localhost:4000/api/suggestions"
const [suggestion, setSuggestion] = useState([])
const [editActive, setEditActive] = useState(false)


useEffect(()=>{
    const getSuggestion = async(id)=>{
        try {
            const findSuggestion = await axios.get(slash+`/${id}`)
            setSuggestion(findSuggestion.data)
        } catch (error) {
            console.log(error)
        }
    }
    getSuggestion()
},[])


// useEffect(()=>{
//     suggestionDelete()
// },[])

    return(
        <div className="row sgstPage">
                <form className="columns six suggestForm" action="/" method="POST" style={{hidden:editActive ? true : false}}>
                <h1> Suggest A Location</h1>
                <label for="title">Your Name</label>
                <input type="text" name="title" value={suggestion.Name}></input>
                <label for="Street">Street</label>
                <input type="text" name="Street" value={suggestion.Street}></input>
                <label for="Zip Code">Zip Code</label>
                <input type="text" name="Zip Code" value={suggestion.Zip_Code}></input>
                <label for="Artist">Artist</label>
                <input type="text" name="Artist" value={suggestion.Artist}></input>
                <label for="">Details</label>
                <textarea type="text" name="Details" value={suggestion.Details}></textarea>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>


            </form>


    
                <div className="columns six loc-list-wrapper">
                    <h3>Suggested Locations</h3>
                    <div className = "loc-list">

                        <div className="icn-btn"></div>
                        <div className="icn-btn"></div>
                    </div>
                </div>
        </div>
    )
}

export default SubmitPage