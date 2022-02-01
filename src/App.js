import logo from "./phone.png";
import playstore from "./playstore.png";
import "./App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Nav activeKey="/home" className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Shop</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>Some part</Col>
                    <Col className="phoneMiddle">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col className="rightColumn">
                        Hhiker app - ridesharing app
                        <br />
                        <a href="https://play.google.com/store/apps/details?id=ttpc.hitchhikerapp">
                            <img
                                src={playstore}
                                className="playstore"
                                alt="logo"
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
