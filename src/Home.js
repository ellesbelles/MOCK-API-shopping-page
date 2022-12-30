import { useState, useEffect, useContext } from 'react'
import { ProductContext } from './App'
import Navigation from './Nav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const {products, setProducts} = useContext(ProductContext)

    const handleDelete = (id) => {
       const filteredProducts = products.filter(product => {
        return product.userId !== id
       })
       setProducts(filteredProducts)
    }
  return (
    <div>
        <Navigation/>
        <div className='text-end mb-2 mt-2'>
            <Link to="/create" className="btn btn-primary">Add Product</Link>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
        {products.map((product, key) => {
            return <Card style={{ width: '18rem', marginRight: '20px', marginBottom: '20px' }} key={key}>
            <Card.Img variant="top" src={product?.productimage} />
            <Card.Body>
              <Card.Title>{product?.productname}</Card.Title>
              <Card.Text>{product?.productprice}</Card.Text>
              <Button variant="primary" style={{marginRight: '10px'}}>Edit</Button>
              <Button variant="danger" onClick={e => handleDelete(product?.userId)}>Delete</Button>
            </Card.Body>
          </Card>
        })}
        </div>
    </div>
  )
}

export default Home