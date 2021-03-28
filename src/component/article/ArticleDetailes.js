import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';




const ArticleDetailes=()=>{
    const [user,setUser] = useState([]);
     
     const {id} = useParams();
  
     useEffect(()=>{
         loadUser();

     },[])
     const loadUser = async  ()=>{
        const result = await axios.get(`http://localhost:3004/posts/${id}`);
        setUser(result.data);
       
     
    } ;    
    
     
    return(
        <div>
        <div className="container py-4">
        <Link className="btn btn-primary" to= "/articlelist"> Back to home</Link>
        <hr color="white"/>
        <h2>Article Detailes</h2>
        <ul className="list-group w-100">
        <li className="list-group-item"> <h2>Title:{user.title}</h2></li>
        <li className="list-group-item"> <b>Body:</b>{user.body}</li>
        </ul>
        
        </div>
        
     
        
        </div>
      
     
    )
}
export default ArticleDetailes;