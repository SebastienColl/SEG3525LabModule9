import React, { useState } from 'react';
import { Button, Container, Form, Modal, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import { partnersSearch } from "./mockdata"
import {BsFillChatFill} from "react-icons/bs"

interface PartnersComponentProps {

}

const PartnersComponent: React.FC<PartnersComponentProps> = () => {

    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => setShow(!show);
    return (
        <Container>
            <HeaderComponent title="Cours"/>
            <Table striped bordered hover>
                <tbody>
                    {partnersSearch.map((partnerSearch: any) => {
                        return (
                            <tr className="h4">
                                <td>{partnerSearch.firstName + " " + partnerSearch.lastName + " cherche un partenaire pour jouer le " + partnerSearch.date.getDate() + " " + partnerSearch.date.toLocaleString('fr-ca', { month: 'long' }) + " " + partnerSearch.date.getFullYear()}</td>
                                <td><BsFillChatFill onClick={toggleShow} style={{cursor:"pointer"}}className="border rounded p-1" size={36}/></td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                <Modal show={show}>
                    <Modal.Header>
                    <Modal.Title>Recherche de partenaire</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group>
                        <Form.Label>Contenu du message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={toggleShow}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={toggleShow}>
                        Envoyer le message
                    </Button>
                    </Modal.Footer>
                </Modal>
        </Container>
    )
}

export default PartnersComponent;