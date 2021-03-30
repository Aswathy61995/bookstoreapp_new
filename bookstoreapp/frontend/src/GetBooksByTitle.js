import React  from "react";
import Book from './Book';
import ProductstylingController from './ProductstylingController'
import { withRouter } from 'react-router';
import Comment from './features/comment';
import { Link } from 'react-router-dom';
class GetBooksByTitle extends React.Component{
   
   
    state={
        booksObject:this.props.location.booksObject
        //title:this.props.location.title
    }
putComment(){
    //    const com=document.getElementById("comment").value
    //    document.getElementById("result").textContent = com;
    //    localStorage.getItem(com);
   // this.props.history.push("/comment");
      
   }
    render(){
        
        return(
            <div className="container">
<h3>Book Details</h3>
<img src= {this.state.booksObject.image} width="150px" height="250px"></img> 
<img src= {this.state.booksObject.imagePath} width="150px" height="250px"></img>
<br></br>
<b> Title : {this.state.booksObject.title}</b>
  <br></br>
<b>Price : {this.state.booksObject.price}</b>
 
<div>

 <button id="com"> < Link to="/comment"> <b>Write a review</b></Link></button>

 <span id="result"></span>
<br></br>


</div>
</div>
        )}
    }
    export default withRouter(GetBooksByTitle);