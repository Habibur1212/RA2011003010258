import './App.css';
import useFetch from "./useFetch";
import { useState } from 'react';

function App() {
  const { error, isPending, data: products } = useFetch('https://plotline-assignment-ra2011003010250.onrender.com/products')

  if(products){
    return (
      <div className="App">
        {products.map(
          (product) => {
            if (product.price == 50){
              return (
                <div>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
              )
            }
          }
        )}
  
      </div>
    )
  }else {
    return ("Loading");
  } 
}

export default App;
