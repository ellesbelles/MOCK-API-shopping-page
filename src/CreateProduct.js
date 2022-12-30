import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from './Nav'

const CreateProduct = () => {
    const [formValues, setFormValues] = useState([
        {
            userId: Math.floor(Math.random() * 1000),
            productname: "",
            productimage: "",
            productprice: ""
        }
    ]);

    const handleSubmit = (e) => {
        
    }

  return (
    <div>
        <Navigation/>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProductName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" value={formValues.productname} onChange={(e) => {
          setFormValues((prevState) => ({
            ...prevState,
            productname: e.target.value
        }))
        }
        }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formProductPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price" value={formValues.productprice} onChange={(e) => {
          setFormValues((prevState) => ({
            ...prevState,
            productprice: e.target.value
        }))
        }
        }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formProductImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter product image" value={formValues.productimage} onChange={(e) => {
          setFormValues((prevState) => ({
            ...prevState,
            productimage: e.target.value
        }))
        }
        }/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateProduct