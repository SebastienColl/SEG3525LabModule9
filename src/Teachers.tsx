import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import YouTube from 'react-youtube';


interface TeachersComponentProps {

}

const TeachersComponent: React.FC<TeachersComponentProps> = () => {
    const opts = {
        width: '100%',
      };
    return (
        <Container>
            <HeaderComponent title="Enseignants"/>
            <Col>
                <Row>
                    <Col className="p-4">
                        <h5>Darren Cahill</h5>
                        <YouTube videoId="8S9f-wqbdhc" opts={opts} />
                    </Col>
                    <Col className="p-4">
                        <h5>Tom Rees</h5>
                        <YouTube videoId="ftFVj53ov8o" opts={opts} />
                    </Col>
                </Row>
                <Row>
                    <Col className="p-4">
                        <h5>Nick Bollettieri</h5>
                        <YouTube videoId="nUTSeQmgJ4U" opts={opts} />
                    </Col>
                    <Col className="p-4">
                        <h5>Patrick Mouratoglou</h5>
                        <YouTube videoId="Y7ANsNriPrI" opts={opts} />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default TeachersComponent;