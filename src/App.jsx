import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Navigation from './Navigation.jsx';
import Jumpotron from './Jumpotron.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

const App = () => {
    return (
        <>
            <main className="">
                <Container fluid="true">
                    <Row>
                        <Col>
                            <Navigation></Navigation>
                        </Col>
                    </Row>

                    <Container>
                        <Row className='m-5'>
                            <Col>
                                <Jumpotron></Jumpotron>
                            </Col>
                        </Row>

                        <Row xs="1" md="4" className='m-5'>
                            <Col className='col-lg-4 col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='col-lg-4 col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='col-lg-4 col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='col-lg-4 col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                        </Row>
                    </Container>

                    <Row>
                        <Col>
                            <Footer></Footer>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default App;