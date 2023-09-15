import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import img1 from './img/inventul logo.png';
import img from '../Navbar/Navbar.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';



//  import Image from ' component/Navbar/inventul logo.png';

function OffcanvasExample() {
  
  return (

    <>
    
      {[false ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 justify-content-start ">
          <Container  fluid>
            
             <Navbar.Toggle className='toggel' aria-label={`offcanvasNavbar-expand-${expand}`} /> 
            <Navbar.Offcanvas
            //   id={`offcanvasNavbar-expand-${expand}`}
            //   aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            //   placement="end"
            >
              <div>

              </div>
              <Offcanvas.Header >
                 <Navbar.Brand >
                  <img className=" img "
          src={img1}
          alt="Logo"
          width="130" // Adjust the width of the logo as needed
          height="75" // Adjust the height of the logo as needed
        />
      </Navbar.Brand> 
                {/* </Offcanvas.Title>  */}
                          
                      </Offcanvas.Header>
                      
              <Offcanvas.Body>
                <Nav className=" justify-conatain-center  list-unstyled text-center">
                  <div className='dashboard'>
                  <a href="/dashboard">Dashboard</a>                 </div>
                  
      <div className='py-3 justify-conatain-centre mm-collapse  mm-show list-unstyled text-center'>
        



                    <DropdownButton id="dropdown-item-button" title="Products">
                      <div className='dropdown'>
        <Dropdown.Item href="/addproduct">Add Product</Dropdown.Item>
        <Dropdown.Item href="/productlist">Product List</Dropdown.Item>
       <Dropdown.Item href="/category">Category</Dropdown.Item>
        <Dropdown.Item href="/brand">Brand</Dropdown.Item>
        <Dropdown.Item href="/unit/value">Unit/Value</Dropdown.Item>
        <Dropdown.Item href="/generatebarcode">Generate Barcode</Dropdown.Item>
        <Dropdown.Item href="/addadjustment">Add Adjustment</Dropdown.Item>
                        <Dropdown.Item href="/adjustmentlist">Adjustment List</Dropdown.Item>
                        </div>
              </DropdownButton>
                    </div>
                  
                  <div className='py-3'>
                  <DropdownButton id="dropdown-item-button" title="User Management">
 
     <Dropdown.Menu className="justify-contain-center  list-unstyled text-center">
        <Dropdown.Item href="/adduser">Add User</Dropdown.Item>
        <Dropdown.Item href="/userlist">User List</Dropdown.Item>
        <Dropdown.Item href="/createrole">Create Role</Dropdown.Item>

                      </Dropdown.Menu>
                      </DropdownButton>
                  </div>  
                </Nav>
                 
              </Offcanvas.Body>
                  </Navbar.Offcanvas>
                  {/* <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action1"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link> */}

          </Container>
        </Navbar>
      ))}
    </>
    
  );
}

export default OffcanvasExample;
