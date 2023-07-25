import React, { useEffect, useState } from "react";
import Axios from'axios';
import Card from "./Card";
import { useNavigate } from "react-router-dom";
function Main(){
    const navigate=useNavigate()
    let  num=0
   const [value,setValue]=useState('');
   const[data,setData]=useState([])
   const getdata=async()=>{
    await Axios.get("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAXB4qXIUf7mQOxTae8t4wDhNnx4SmjEpU&maxResults=40")
    .then(res=>res.data)
    .then(data=>setData(data.items))
   }
   useEffect(()=>{
      getdata();
   },[])
   const formhandler=async(e)=>{
    e.preventDefault();
    if(value != ' '){
     await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAXB4qXIUf7mQOxTae8t4wDhNnx4SmjEpU&maxResults=40`)
     .then(res=>res.data)
     .then(data=>setData(data.items))
     .catch(()=>alert("no book found"))
    }else{
       alert("no movie found")
    }
   }
   console.log(data);
    return(
        <div className="page-container">
            <div className="header">
            <h1>Book app</h1>
            <form onSubmit={formhandler}>
                <input type="text"
                 placeholder="Enter the book name"
                 onChange={(e)=>setValue(e.target.value)}
                />
            </form>
            </div>
            <div className="Cards">
           {data.map((item)=>{
            return(
            <Card key={num++} item={item}/>
            )
           })}
         </div>
        </div>
    )
}

export default Main;