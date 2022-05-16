const SubmitPage = ()=>{

    return(
        <div className="row sgstPage">

            <form class="columns six suggestForm" action="/" method="POST">
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
                    <div classNamme = "loc-list">

                        <li>
                        {/* <strong>Artist</strong>: {popupInfo.Artist}<br></br>
                        <strong>Address</strong>: {popupInfo.Street}, PostalCode: {popupInfo.PostalCode}<br></br>
                        <strong>Year</strong>: {popupInfo.Year}<br></br> */}
                        </li>
                        <div className="icn-btn"></div>
                        <div className="icn-btn"></div>
                    </div>
                </div>
        </div>
    )
}

export default SubmitPage