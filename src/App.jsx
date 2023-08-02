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
                <Navigation></Navigation>
                <Container fluid="true">
                    <Row className='ms-4 me-4'>
                        <Row>
                            <Col>
                                <Jumpotron></Jumpotron>
                            </Col>
                        </Row>

                        <Row xs="1" sm="2" md="3" lg="4" className='mb-3 mt-3'>
                            <Col className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <Card></Card>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                <Footer></Footer>
            </main>
        </>
    );
};

export default App;