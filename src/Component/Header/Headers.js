import React from 'react';
import './Headers.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Headers = (props) => {
    return (       
        <Navbar fixedTop className="navbar navbar-default " collapseOnSelect>
             <Navbar.Header>
                    <Navbar.Brand className='navbar-brand'>
                        <a href='#home'>One-Agent</a>
                    </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav pullRight className='navbar-nav'>
                    <NavItem eventKey={1} href='#' active={false}>Home</NavItem>
                    <NavItem eventKey={2} href='#' >Money</NavItem>
                    <NavItem eventKey={3} href='#' >Motivation</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>       
    );
}
export default Headers;





























// class Headers extends Component {
//   render() {
//     return (       
//         <Navbar fixedTop className="navbar navbar-default " collapseOnSelect>
//              <Navbar.Header>
//                     <Navbar.Brand className='navbar-brand'>
//                         <a href='#home'>One-Agent</a>
//                     </Navbar.Brand>
//                 <Navbar.Toggle/>
//             </Navbar.Header>

//             <Navbar.Collapse>
//                 <Nav pullRight className='navbar-nav'>
//                     <NavItem eventKey={1} href='#' active={false}>Home</NavItem>
//                     <NavItem eventKey={2} href='#' >Money</NavItem>
//                     <NavItem eventKey={3} href='#' >Motivation</NavItem>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>       
//     );
//   }
// }






// #4285f4