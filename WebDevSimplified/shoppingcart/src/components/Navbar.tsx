import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export const Navbar = () => {

    const { openCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            
            
                <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
            
            
                <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            </Nav>
            <Button onClick={openCart} style={{
                width: '3rem', height: '3rem', position: 'relative'
            }} variant='outline-primary' className='rounded-circle'>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
            {cartQuantity > 0 && (
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{
                color: 'white', width: '1.3rem', height: '1.3rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)'
            }}>{cartQuantity}</div>
            )}
            </Button>
        </Container>
    </NavbarBs>
  )
}
