import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

const Header=()=>{
    let history=useHistory();
    const logout=()=>{
      localStorage.removeItem("login")
        history.push("/")
    }
    return(
        <div className="header">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         LogOut
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>logout()} >logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
     
    )
}
export default Header;