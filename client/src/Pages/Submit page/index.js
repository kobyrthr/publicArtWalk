import React,{useState,useEffect} from "react"
import axios from "axios"

const SubmitPage = ()=>{
const slash = "http://localhost:4000/api"
const [suggestions, setSuggestions] = useState([])


useEffect(()=>{
    const getSuggestions = async()=>{
        try {
            const allSuggestions = await axios.get(slash+'/suggestions')
            setSuggestions(allSuggestions.data)
        } catch (error) {
            console.log(error)
        }
    }
    getSuggestions()
},[])


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
                                {suggestion.Street}
                                {suggestion.Zip_Code}
                                {suggestion.Zip_Code}
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