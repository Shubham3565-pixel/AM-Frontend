import { Navbar } from 'react-bootstrap';

function Navbar_home() {
    return (
        <Navbar style={{backgroundColor:'#c5c6c7'}}>
            <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Shubham Agrawal</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>);
}

export default Navbar_home;