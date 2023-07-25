import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { htmlToText } from 'html-to-text';
import Axios from "axios";
function Cardinfo(){
    const{id}=useParams();
    const [item,setItem]=useState()
    useEffect(()=>{

        if(id!=" "){
          Axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
          .then(res=>res.data)
          .then(data=>setItem(data)) 
          .catch(e=>console.log(e)) 
        }
    },[item])
    // var description = htmlToText(item.volumeInfo.description);   
    return(
        <>
        {!item?(
            ""
        ):(
   
            <div className="cardinfo-container">
            
            <div className="cardinfo-image">
                <div className="image">
            <img src={item.volumeInfo.imageLinks.thumbnail}/>
            <p><b>Title</b> : {item.volumeInfo.title}</p>
            </div>
            <div className="image-content">
            
            <h1>Author : {item.volumeInfo.authors[0]}</h1>
            <h4>Stock : {item.saleInfo.saleability}</h4>
            <p><b>PublishedDate</b> : {item.volumeInfo.publishedDate}</p>
            </div>
            </div>
            <div className="cardinfo-content">
            <h1>Description: </h1>
            <p>{htmlToText(item.volumeInfo.description)}</p>
            <a href={item.volumeInfo.previewLink}><button>Preview Link</button></a>
            </div>
            </div>


        )
        
        }
        </>
    )
}


export default Cardinfo