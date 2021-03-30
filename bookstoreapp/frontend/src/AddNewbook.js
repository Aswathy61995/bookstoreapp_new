import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import* as Yup from 'yup';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import swal from 'sweetalert';
import BellIcon from 'react-bell-icon';
const baseUrl ="http://localhost:4000";
const AddbookSchema= Yup.object().shape({
  title:Yup.string()
  .min(2,'Too short!!')
  .max(15,'Too long!!')
  .required('Required'),
  price: Yup.string()
  .min(2,'Too short!!')
  .max(15,'Too long!!')
  .required('Required')
  });

class AddNewbook extends React.Component {
 constructor(props){
     super(props);
    this.state = {
      title: "",
      price:"",
      image:null,
      
    }
}
  
  TitleChange = (event) => {
    this.setState({
        title: event.target.value
    })
}
PriceChange = (event) => {
    this.setState({
        price: event.target.value
    })
}
imageup(event){
    this.setState({
        image: URL.createObjectURL( event.target.files[0])
    })
}

onSubmit = (event) => {
// var fd =new FormData();
// fd.append("title",this.state.title);
// fd.append("price",this.state.price);
// fd.append("image",this.state.image);
// fetch("http://localhost:4000/books/addNewbook",{
//     method:'POST',
//     body:fd
    
// })
  event.preventDefault();
  let title = this.state.title;
  let price = this.state.price;
  let imagePath = this.state.imagePath;
  let image = this.state.image;
  
  Book.addNewbook(title,price,image,imagePath)

   .then(response=>{
 swal("Successfull!",response.data.message, "success");
 //NotificationManager.success('You have added a new book!', 'Successful!');
   this.props.history.push("/");
})
.catch(error=>{
 //swal("Registration failed!!",error.response.data.message , "error");
   //NotificationManager.error('Error while Creating new book!', 'Error!');
 });
}



render() {
 
  
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/listAllBooks" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
              
            </div>
            
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <form  onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input type='text' placeholder='Title of the Book' name='title' className='form-control' value={this.state.title} onChange={this.TitleChange}/>
                </div>
                <br />
                <div className='form-group'>
                  <input type='text' placeholder='price' name='price' className='form-control' value={this.state.price} onChange={this.PriceChange}/>
                </div>
                <p>Image Upload:</p>
                <p>
                  <input type='file' name='image'  onChange={this.imageup.bind(this)}/>
                  <img src={this.state.file}/>
                </p>
       <button type="submit" className="btn btn-outline-warning btn-block mt-4"  >Add Book</button>
       {/* onClick={this.makePayment.bind(this)} */}
       
        <NotificationContainer />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewbook) ; 