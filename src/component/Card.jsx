import React from "react";
import { useNavigate } from "react-router-dom";
function Card({item}){
    const navigate=useNavigate()
    const image=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    if(image!==undefined){
    return(
        <div className="card-container" onClick={()=>navigate(`/${item.id}`)}>
          <div className="images">
           <img src={image} />
          </div>
          <div className="title">
          <p>{item.volumeInfo.title}</p>
          </div>
        </div>
    )
    }
}

export default Card