import { Navbar,Button } from 'react-bootstrap';
import keycloak from 'keycloak-js'


function Navbar_home(props) {
    return (
        <Navbar style={{backgroundColor:'#c5c6c7'}}>
            <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Shubham Agrawal</a>
                </Navbar.Text>
            </Navbar.Collapse>
            {/* <Button variant="primary" href={props.props} style={{marginLeft:'5px'}}>Log Out</Button> */}
        </Navbar>);
}

export default Navbar_home;