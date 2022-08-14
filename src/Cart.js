import  {ListGroup, Card, Button, Modal}  from 'react-bootstrap'
import { useState} from 'react'

function Cart ({cartProducts, setCartProducts}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let totalPrice = 0
  let totalAmount = 0

  const createList = (product) => {
      totalPrice += product.price
      totalAmount += product.quantity
    return (
      <ListGroup.Item className='cartItems'>
        <span>{product.name}</span><span>{`Price: ${product.price}$`}</span>
        <span>{`Amount: ${product.quantity}`}</span>
      </ListGroup.Item>)
    
  }

  const popUp = () => {
    return (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            'Are you sure you want to make the order?'
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={() => {
            setCartProducts([])
            handleClose()}}
            >Yes</Button>
          </Modal.Footer>
        </Modal>
    );
  }

  
  return (
    <div>
      <h1 className='title'>Cart:</h1>
      <ListGroup>
      {cartProducts.map(product => createList(product))}
      </ListGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Summary:</Card.Title>
          <Card.Text>
            Total Price: {`${totalPrice}$`}
          </Card.Text>
          <Card.Text>
            Total Amount: {totalAmount}
          </Card.Text>
          <Button onClick={handleShow}
          >Order</Button>
        </Card.Body>
      </Card>
      {popUp()}
    </div>
  )


}

export default Cart