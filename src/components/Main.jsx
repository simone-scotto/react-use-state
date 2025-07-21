
import webLanguages from "../db/webdev"


import { useState } from "react"


export default function Main () {

const [selectedLang, setSelectedLang] = useState(null)
    

    function handleClick (lang){
        console.log(lang);
        
        setSelectedLang(lang)        
    }
    return (
        <div className="container">

            <div className="btn-section">
                {webLanguages.map(({id, title, description}) => {
                    return (
                        
                        <button onClick={()=>handleClick({id, title, description})} key={id} type="button" className={`btn ${selectedLang?.id === id ? "btn-warning" : "btn-primary"}`}>{title}</button>
                        
                        
                        
                    )
                })}

            </div>

            <div className="card-section">
                {selectedLang ?  (
                    <>
                    <div className="card">
                        <h3>{selectedLang.title}</h3>
                        <p>{selectedLang.description}</p>
                    </div>
                    </>
                    )  : (
                    <div className="card">
                        <h3>nessun linguaggio solezionato</h3>
                        <p>selezionare un linguaggio</p>
                    </div>

                )
                }

            </div>    
        </div>    
    )
}