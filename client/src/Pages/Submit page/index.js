import React,{useState,useEffect} from "react"
import axios from "axios"

const SubmitPage = ()=>{
const slash = "http://localhost:4000/api/suggestions"
const [suggestions, setSuggestions] = useState([])
const [Name, setName]= useState("")
const [Street, setStreet]= useState("")
const [Zip_Code, setZip_Code]= useState("")
const [Artist, setArtist]= useState("")
const [Details, setDetails]= useState("")
const [show, setShow] = useState(true)
const [suggestionId, setSuggestionId] = useState("")


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




const openEdit = async (id)=>{
    try {
        let suggestion = suggestions.filter(x=>x._id===id)
        setShow(false)
        setSuggestionId(suggestion[0]._id) 
        console.log(suggestionId)
        setStreet(suggestion[0].Street) 
        setZip_Code(suggestion[0].Zip_Code)
        setArtist(suggestion[0].Artist)
        setDetails(suggestion[0].Details)
        // console.log(e)

        // const updateSuggestion = await axios.put(slash+`/${id}`)
        // console.log(updateSuggestion)        
    } catch (error) {
        console.log(error)
    } 
}

const closeEdit = async (id)=>{
    try {
        let suggestion = suggestions.filter(x=>x._id===id)
        setShow(true)
        setSuggestionId("") 
        console.log("") 
        setZip_Code("")
        setArtist("")
        setDetails("")
      
    } catch (error) {
        console.log(error)
    } 
}

const suggestionEdit = async (e)=>{
    try {
        e.preventDefault()
        setShow(false)
        // let suggestion = suggestions.filter(x=>x._id===id)
        // setSuggestionId("") 
        // console.log("") 
        // setZip_Code("")
        // setArtist("")
        // setDetails("")
        // console.log(e)
        const updatedSuggestion = {Name, Street, Artist, Details, Zip_Code}
        console.log(updatedSuggestion)

        const res = await axios.put(slash+`/${suggestionId}`, updatedSuggestion)
        console.log(res)      
        getSuggestions()  
    } catch (error) {
        console.log(error)
    } 
}

    return(
        <div className="row sgstPage">
        {show? 
         <form className="columns six suggestForm" action="/" method="POST">
                <h1> Suggest A New Location</h1>
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
        :
            <div>

            
            <form className="columns six suggestForm" action="/" method="POST" style={{}}>
                <h1> Edit A Suggestion</h1>
                <label for="title">Your Name</label>
                <input type="text" name="title" value={Name} onChange={e=>setName(e.target.value)}></input>
                <label for="Street">Street</label>
                <input type="text" name="Street" value={Street} onChange={e=>setStreet(e.target.value)}></input>
                <label for="Zip Code">Zip Code</label>
                <input type="text" name="Zip Code" value={Zip_Code} onChange={e=>setZip_Code(e.target.value)}></input>
                <label for="Artist">Artist</label>
                <input type="text" name="Artist" value={Artist} onChange={e=>setArtist(e.target.value)}></input>
                <label for="">Details</label>
                <textarea type="text" name="Details" value={Details} onChange={e=>setDetails(e.target.value)}></textarea>
                <button type="submit" onClick={(e)=>suggestionEdit(e)}>Save</button>
                <button type="reset" onClick={(e)=>closeEdit()}>Cancel</button>
            </form>
            </div>
        }

           

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
                                <button onClick={(e)=>openEdit(suggestion._id)}>Edit</button>
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