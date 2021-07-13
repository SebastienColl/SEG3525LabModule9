import React, { useState } from 'react';
import { Button, Container, Form, Nav, ProgressBar, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import 'react-credit-cards/es/styles-compiled.css';
import Cards, { Focused } from 'react-credit-cards';



interface ReservationComponentProps {

}

const ReservationComponent: React.FC<ReservationComponentProps> = () => {

    const [cvc, setCVC] = useState<string>("");
    const [expiry, setExpiry] = useState<string>("");
    const [focus, setFocus] = useState<Focused>("number");
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const [steps, setSteps] = useState<any>([{
        id: 0,
        stepName: "Information générale",
        percentage: 20
    },{
        id: 1,
        stepName: "Adresse de facturation",
        percentage: 55
    },{
        id: 2,
        stepName: "Information de paiement",
        percentage: 80
    },{
        id: 3,
        stepName: "Terminé!",
        percentage: 99
    }]);

    //Forms
    const { 
        register: registerPersonalInfo, 
        formState: { errors: errorsPersonalInfo },
        handleSubmit: handleSubmitPersonalInfo,
    } = useForm();
    const { 
        register: registerFacturationAddress, 
        formState: { errors: errorsFacturationAddress },
        handleSubmit: handleSubmitFacturationAddress,
    } = useForm();
    const { 
        register: registerPaymentInfo, 
        formState: { errors: errorsPaymentInfo },
        handleSubmit: handleSubmitPaymentInfo,
    } = useForm();

    const onSubmit = () => {
        console.log(errorsPersonalInfo)
    }
    //Components
    const InformationComponent = () => {
        return (
            <>
                <h2 className="my-3">{steps[currentStepIndex].stepName}</h2>
                <Form className="w-50" onSubmit={handleSubmitPersonalInfo(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nom<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder="Nom"
                        {...registerPersonalInfo("lastName", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prénom<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder="Prénom"
                        {...registerPersonalInfo("firstName", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Numéro de téléphone<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder="Numéro de téléphone"
                        {...registerPersonalInfo("phoneNumber", {required: "Ce champ est requis.", pattern: /\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/g})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Instructeur désiré<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control as="select" placeholder="Instructeur désiré" 
                        {...registerPersonalInfo("teacher", {required: "Ce champ est requis."})}>
                            <option>ttse</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cours désiré<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control as="select" placeholder="Instructeur désiré" 
                        {...registerPersonalInfo("course", {required: "Ce champ est requis."})}>
                            <option>Cours générale débutant</option>
                            <option>Cours générale intermédiaire</option>
                            <option>Cours générale avancé</option>
                            <option>Cours générale avancé</option>
                            <option>Leçon de service</option>
                            <option>Leçon de revers</option>
                            <option>Leçon de smash</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date et heure<sup className="text-danger">*</sup></Form.Label>
                        <Datetime />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Ligne d'adresse<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ligne d'adresse"
                        {...registerPersonalInfo("addressLine", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label > Ville<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ville"
                        {...registerPersonalInfo("city", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Province<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Province"
                        {...registerPersonalInfo("province", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Code postale<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Code postale"
                        {...registerPersonalInfo("postalCode", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Row>
                        <Button variant="danger" type="submit" className="mx-2" onClick={() => { Object.keys(errorsPersonalInfo).length === 0 ? setCurrentStepIndex(currentStepIndex + 1) : console.log(errorsPersonalInfo)}}>
                        Prochain
                        </Button>
                    </Row>
                </Form>
                
            </>
        )
    } 
    
    const FacturationAddressComponent = () => {
        return (
            <>
                <h2 className="my-3">{steps[currentStepIndex].stepName}</h2>
                <Form className="w-50" onSubmit={handleSubmitFacturationAddress(onSubmit)}>
                    <Form.Group>
                        <Form.Label> Ligne d'adresse<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ligne d'adresse"
                        {...registerFacturationAddress("addressLine", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label > Ville<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ville"
                        {...registerFacturationAddress("city", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Province<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Province"
                        {...registerFacturationAddress("province", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Code postale<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Code postale"
                        {...registerFacturationAddress("postalCode", {required: "Ce champ est requis."})}/>
                    </Form.Group>
                <Row>
                    <Button variant="danger" className="mx-2" onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>
                    Précédent
                    </Button>
                    <Button variant="danger" type="submit" className="mx-2" onClick={() => {
                        if(Object.keys(errorsFacturationAddress).length == 0){
                            setCurrentStepIndex(currentStepIndex + 1)
                        } else {
                            console.log(errorsFacturationAddress)
                        }}}>
                    Prochain
                    </Button>
                </Row>
                </Form>
            </>
        )
    }

    const PaymentInformationComponent = () => {
        return (
            <>
                <h2 className="my-3">{steps[currentStepIndex].stepName}</h2>
                <Cards
                      cvc={cvc}
                      expiry={expiry}
                      focused={focus}
                      name={name}
                      number={number}
                    />
                    <Form className="w-50" onSubmit={handleSubmitPaymentInfo(onSubmit)}>
                      <Form.Group key={2}>
                        <Form.Label>Numéro de carte</Form.Label>
                        <Form.Control
                        defaultValue={number}
                        type="tel"
                        {...registerPaymentInfo("number", {required: "Ce champ est requis."})}
                        maxLength={19}
                        onChange={(e:any) => setNumber(e.target.value)}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder="Numéro de carte (ex: 1234 5678 9012 3456)" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Nom sur la carte</Form.Label>
                        <Form.Control
                        key="nameKey"
                        {...registerPaymentInfo("name", {required: "Ce champ est requis."})}
                        type="text"
                        onChange={(e:any) => {setName(e.target.value)}}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder="Nom sur la carte" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Date d'expiration</Form.Label>
                        <Form.Control
                        key="expiryKey"
                        {...registerPaymentInfo("expiry", {required: "Ce champ est requis."})}
                        type="text"
                        onChange={(e:any) => {setExpiry(e.target.value)}}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder="Date d'expiration (ex: 05/23)" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control
                        key="cvcKey"
                        {...registerPaymentInfo("cvc", {required: "Ce champ est requis."})}
                        type="text"
                        onChange={(e:any) => {setCVC(e.target.value)}}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder="CVC (ex: 123)" />
                      </Form.Group>
                    </Form>
                <Row>
                    <Button variant="danger" className="mx-2" onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>
                    Précédent
                    </Button>
                    <Button variant="danger" className="mx-2" onClick={() => {console.log(currentStepIndex); setCurrentStepIndex(currentStepIndex + 1);}}>
                    Prochain
                    </Button>
                </Row>
            </>
        )
    }

    const DoneComponent: React.FC = () => {
        return (
            <>
                <h2 className="my-3">Votre réservation a été enregistrée avec succès!</h2>
                <Row>
                    <Link to="/SEG3525LabModule9">
                        <Button variant="danger" className="mx-2">
                            Retour à la page principale
                        </Button>
                    </Link>
                </Row>
            </>
        )
    }
    return (
    <Container>
        <HeaderComponent title="Réservation"/>
        <ProgressBar variant="danger" now={steps[currentStepIndex].percentage} label={steps[currentStepIndex].stepName}/>
        {currentStepIndex === 0 ? InformationComponent() :
         currentStepIndex === 1 ? FacturationAddressComponent() :
         currentStepIndex === 2 ? PaymentInformationComponent() :
         currentStepIndex === 3 ? <DoneComponent/> : "Woops"}
    </Container>
    );
  }

export default ReservationComponent;