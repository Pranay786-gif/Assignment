import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
//import AuthApi from './AuthApi';


const Login = () => {
   //const Auth=React.useContext(AuthApi);
    let history=useHistory();
    const [user,setUser] = useState({
       email:"",
       password:""
      
     

    });
    const {email,password}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit =  (e)=>{
        e.preventDefault();
        
        if(user.email === "test@yopmail.com" && user.password === '123456' ){
            localStorage.setItem('login',JSON.stringify(user))
            history.push("/articlelist")

        
           
           
           
        } else{
            alert("wrong email or passwordd")
        }
       
        
    }

    return (
        <div className="login"> 
            <h1>login</h1>
            <form onSubmit={e => onSubmit(e)}>
             
                    <input type="text" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={e=>onInputChange(e)}  /> <br />                   
                    <input type="password" className="form-control" placeholder="password" name="password" value={password} onChange={e=>onInputChange(e)} />  <br />
                    <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
      
    )
};                                    
export default Login;