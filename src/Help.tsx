import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import { AiFillPhone } from "react-icons/ai"

interface HelpComponentProps {

}

const HelpComponent: React.FC<HelpComponentProps> = () => {

    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => setShow(!show);
    return (
        <Container>
            <HeaderComponent title="Aide"/>
            <Row className="lb-back py-3">
            <Col className="px-5">
                <Row>
                <h1><u>Nous Joindre</u></h1>
                </Row>
                <Row className="py-4">
                <Col>
                    <h5>
                    1065 Plains Road East <br/>
                    Burlington ON <br/>
                    L7T 4K1 <br/>
                    </h5>
                </Col>
                <Col>
                    <h5>
                    Tel: 819-986-6958 <br/>
                    Fax: 613-968-8752 <br/>
                    Email: info@avosraquettes.ca <br/>
                    </h5>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    )
}

export default HelpComponent;