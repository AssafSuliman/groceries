import  {ListGroup}  from 'react-bootstrap'
import { useState, useEffect} from 'react'

function Store () {
  let [groceries, setGroceries] = useState([
    {id:1, name:'Lemon', price:20, quantity:5, image:''},
    {id:2, name:'Tomato', price:15, quantity:3, image:''},
    {id:3, name:'Screen', price:400, quantity:6, image:''},
    {id:4, name:'Shelf', price:85, quantity:11, image:''},
    {id:5, name:'Headphones', price:45, quantity:8, image:''},
    {id:6, name:'Camera', price:150, quantity:2, image:''},
    {id:7, name:'Keyboard', price:60, quantity:4, image:''}
  ])
  
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
  }

  return (
    <div>
      <h1 id="groceriesTitle">Groceries:</h1>
      <ListGroup>
      {groceries.map(product => product.quantity > 0?
        <ListGroup.Item key={product.id} className='storeItems'
          onClick={() => groceriesHandler(product)}>
          <span>{product.name}</span><span>{`Price:${product.price}$`}</span>
          <span>{`Amount: ${product.quantity}`}</span>
        </ListGroup.Item>
        :<ListGroup.Item key={product.id} className='storeItems'>
          <span>{product.name}</span><span>{`Price:${product.price}$`}</span>
          <span>{`Out Of Stock`}</span>
        </ListGroup.Item>)}
      </ListGroup>
    </div>
  )
}

export default Store
