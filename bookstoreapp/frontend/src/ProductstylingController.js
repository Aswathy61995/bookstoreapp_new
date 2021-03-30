
import React, { useState }  from "react";

import{Link} from 'react-router-dom'
  import BellIcon from 'react-bell-icon';

function ProductstylingController({ booksObject,title, price, imagePath,image}) {
    
   const alertName=()=>{
     
       alert('Book Added to cart' )
   };
//    const [cart,setCart]= useState([]);//
//alert(booksObject.title);
return (
    
     <div className="product">
         <p className="image">
        <img src= {image}  width="150px" height="250px"></img>
        </p>
        <p className="imagePath">
        
       <img src= {imagePath}  width="150px" height="250px"></img>
       
            <Link to =
                   {{ 
                    pathname: "/getBooksByTitle",
                   booksObject:booksObject,
                   // title:"title",
                    //price: booksObject.price,
                    //imagePath:booksObject.imagePath
                    }}>
                       
                          <p>{title}</p> 
 </Link>
        </p>
        
       <div className="product__info">
      
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
         </p>
       <button onClick={alertName} > Add to Basket</button>
      </div>
     
  );

                }
export default ProductstylingController;