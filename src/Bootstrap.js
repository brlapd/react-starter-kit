import { Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
    return (
        <div>
            <h3>Bootstrap komponentleri</h3>
            <Button variant='success'>bootstrap button</Button>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    contact
                </Tab>
            </Tabs>
        </div>
    )
}

export default Bootstrap