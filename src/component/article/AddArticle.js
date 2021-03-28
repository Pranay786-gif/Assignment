import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddArticle = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    body: "",
  });
  const { title, body } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", user);
    history.push("/articlelist");
  };

  return (
    <div>
      <h1>Add Articles</h1>
      <div className="rect container">
        <form method="post" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              rows="5"
              type="body"
              className="form-control"
              name="body"
              placeholder="body"
              value={body}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
