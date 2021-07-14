import React, { useState } from 'react';
import { Button, Container, Form, Modal, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import { partnersSearch } from "./mockdata"
import {BsFillChatFill} from "react-icons/bs"
import { LANGUAGES, PartnerSearchComponentStrings } from './Strings';

interface PartnersComponentProps {
    language: string;

}

const PartnersComponent: React.FC<PartnersComponentProps> = ({language}) => {

    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => setShow(!show);
    return (
        <Container>
            <HeaderComponent title={language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.pageTitleFR : PartnerSearchComponentStrings.pageTitleEN}/>
            <Table striped bordered hover>
                <tbody>
                    {partnersSearch.map((partnerSearch: any) => {
                        const sentence = language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.sentenceFR : PartnerSearchComponentStrings.sentenceEN
                        const date = language === LANGUAGES.FRENCH ? partnerSearch.date.getDate() + " " + partnerSearch.date.toLocaleString('fr-ca', { month: 'long' }) + " " + partnerSearch.date.getFullYear() : " " + partnerSearch.date.toLocaleString('en-ca', { month: 'long' }) + " " + partnerSearch.date.getDate() + " " + partnerSearch.date.getFullYear()
                        return (
                            <tr className="h4">
                                <td>{partnerSearch.firstName + " " + partnerSearch.lastName + sentence + date}</td>
                                <td><BsFillChatFill onClick={toggleShow} style={{cursor:"pointer"}}className="border rounded p-1" size={36}/></td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                <Modal show={show}>
                    <Modal.Header>
                    <Modal.Title>{language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.pageTitleFR : PartnerSearchComponentStrings.pageTitleEN}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group>
                        <Form.Label>{language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.messageContentFR : PartnerSearchComponentStrings.messageContentEN}</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={toggleShow}>
                    {language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.cancelFR : PartnerSearchComponentStrings.cancelEN}
                    </Button>
                    <Button variant="primary" onClick={toggleShow}>
                    {language === LANGUAGES.FRENCH ? PartnerSearchComponentStrings.sendMessageFR : PartnerSearchComponentStrings.sendMessageEN}
                    </Button>
                    </Modal.Footer>
                </Modal>
        </Container>
    )
}

export default PartnersComponent;