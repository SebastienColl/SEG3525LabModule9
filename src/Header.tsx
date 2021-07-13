import React from 'react';
import { Container, Navbar, Row } from 'react-bootstrap';

interface HeaderComponentProps {
    title: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({title}) => {
    return (
    <>
        <Row className="mt-4">
            <h3>{title}</h3>
        </Row>
        <hr className="mx-4"/>
    </>
    );
  }

export default HeaderComponent;