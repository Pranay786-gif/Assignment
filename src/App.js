import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import ArticleList from './component/article/ArticleList';
import AddArticle from './component/article/AddArticle';
import ArticleDetailes from './component/article/ArticleDetailes';
import Login from './component/auth/Login';
import ProtectedRoute from './component/ProtectedRoute';
function App() { 
  
  return (
    <div className="background">

      <div className="App">
      
       
        <BrowserRouter>
          <div className="container">
            <Switch>
           
              <Login  exact path="/" component={Login} />
              <ProtectedRoute exact path="/articlelist"  component={ArticleList} />
              <ProtectedRoute exact path="/addarticle"  component={AddArticle} />
              <ProtectedRoute exact path="/articledetailes/:id"  component={ArticleDetailes} />
             
            </Switch>
          </div> 
        </BrowserRouter>
        
  

      </div>

    </div>




  );



};

export default App;
