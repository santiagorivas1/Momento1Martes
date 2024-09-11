import Button from 'react-bootstrap/Button';
import React from 'react'

function Botones() {
  return (
    <>
    <div className='my-button'>
    <Button variant="BuyNow">Buy Now</Button>{' '}
    <Button variant="contact">Contact</Button>{' '}
    </div>
    </>
  )
}

export default Botones