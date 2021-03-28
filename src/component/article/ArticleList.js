import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../header/Header';


const ArticleList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/posts");
    setUser(result.data.reverse());
  };
  const deletePost = async id =>{
    await axios.delete(`http://localhost:3004/posts/${id}`);
    loadUsers();
  }

  return (
    <div>
    <Header />
      <h1> Article List </h1>
      <hr color="white" />
      <Link to="/addarticle" className="btn btn-outline-danger add">Create Article</Link>

      {users.map((user, index) => (
        <div className="table">
          <div>
            <a href={`articledetailes/${user.id}`}><h2>Article{index+1} :{user.title}</h2></a>
          </div><br />
          <Link class="btn btn-danger" onClick={()=>deletePost(user.id)}>Deleat</Link>
          <hr color="white" />
        </div>
      ))}
    </div>
  );
};
export default ArticleList;
