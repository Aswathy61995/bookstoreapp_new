import React , { useState } from 'react';

import BellIcon from 'react-bell-icon';
import Book from './Book';
import ProductstylingController from './ProductstylingController'
class ListAllBooks extends React.Component{
   
    
    state ={
        
        books:[],
       }
    

componentDidMount(){
        Book.getAllBooks()
        .then(data=>{
            this.setState({
                books:data.data.books
            });
        });
       // alert(this.state.books)
    }
    // addtoCart=(title)=>{
    //     setCart([...cart,title]);
    // }
    render(){
       
        return(
            
<div className="row center"> 
<h1>Book List</h1>
<button id="bell"> 
            <BellIcon width='40' active={true} animate={true} />
            <p id="count">{(this.state.books.length)}</p>   </button >


           
                    {
                        this.state.books.map(book=>
                        // <tr>
                        //     <td>{book.title}</td>
                        //     <td>{book.price}</td>
                        //     <td>{book.imagePath}</td>
                        //     <td onClick={()=>{this.addtoCart(book)}}>Add to cart</td>
                        // </tr>

                          <div>
                                <ProductstylingController booksObject={book} title={book.title} price={book.price} imagePath={book.imagePath} image={book.image} />                
                            
                            </div>

                        )}


                
           









  </div>




        );
    }
}



export default ListAllBooks;
