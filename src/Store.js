import  {ListGroup}  from 'react-bootstrap'
import { useState} from 'react'

function Store ({groceries, groceriesHandler}) {

  return (
    <div>
      <h1 className="title">Groceries:</h1>
      <ListGroup>
      {groceries.map(product => product.quantity > 0?
        <ListGroup.Item key={product.id} className='storeItems'
          onClick={() => groceriesHandler(product)}>
          <span>{product.name}</span><span>{`Price: ${product.price}$`}</span>
          <span>{`Amount: ${product.quantity}`}</span>
        </ListGroup.Item>
        :<ListGroup.Item key={product.id} className='storeItems'>
          <span>{product.name}</span><span>{`Price: ${product.price}$`}</span>
          <span>{`Out Of Stock`}</span>
        </ListGroup.Item>)}
      </ListGroup>
    </div>
  )
}

export default Store
