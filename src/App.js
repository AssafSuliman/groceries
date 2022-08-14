import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Store from './components/Store.js'
import Cart from './components/Cart';
import { useState} from 'react'

function App() {
  let [groceries, setGroceries] = useState([
    {id:1, name:'Lemon', price:20, quantity:5, image:''},
    {id:2, name:'Tomato', price:15, quantity:3, image:''},
    {id:3, name:'Screen', price:400, quantity:6, image:''},
    {id:4, name:'Shelf', price:85, quantity:11, image:''},
    {id:5, name:'Headphones', price:45, quantity:8, image:''},
    {id:6, name:'Camera', price:150, quantity:2, image:''},
    {id:7, name:'Keyboard', price:60, quantity:4, image:''}
  ])
  
  let [cartProducts, setCartProducts] = useState([])

  const groceriesHandler = (product) => {
    if(product.quantity === 1){
      product.quantity--
      const filteredGroceries = groceries.filter(data => data.id != product.id)
      filteredGroceries.push(product)
      setGroceries(filteredGroceries)
    }
    else{
      product.quantity--
      setGroceries([...groceries])
    }
    let cartProduct = cartProducts.find(data => data.id === product.id)
    console.log(cartProduct);
    if(cartProduct){
      cartProduct.quantity++
      cartProduct.price += product.price
      setCartProducts([...cartProducts])
    }
    else{
      cartProduct = {id:product.id, name:product.name, price:product.price, quantity:1}
      cartProducts.push(cartProduct)
      setCartProducts([...cartProducts])
    }
  }
  
  return (
    <div className="app">
      <Store groceries={groceries} groceriesHandler={groceriesHandler}></Store>
      <Cart cartProducts={cartProducts} setCartProducts={setCartProducts}></Cart>
    </div>
  );
}

export default App;
