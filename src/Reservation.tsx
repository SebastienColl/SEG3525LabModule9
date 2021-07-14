import React, { useState } from 'react';
import { Button, Container, Form, Nav, ProgressBar, Row } from 'react-bootstrap';
import { useForm, useFormState } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import 'react-credit-cards/es/styles-compiled.css';
import Cards, { Focused } from 'react-credit-cards';
import { BookingComponentStrings, CoursesComponentStrings, LANGUAGES } from './Strings';
import { useEffect } from 'react';
import {AiFillExclamationCircle} from "react-icons/ai"



interface ReservationComponentProps {
    language: string;
}

const ReservationComponent: React.FC<ReservationComponentProps> = ({language}) => {

    const [cvc, setCVC] = useState<string>("");
    const [expiry, setExpiry] = useState<string>("");
    const [focus, setFocus] = useState<Focused>("number");
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
    const [steps, setSteps] = useState<any>([{
        id: 0,
        stepName: language === LANGUAGES.FRENCH ? BookingComponentStrings.generalInformationFR : BookingComponentStrings.generalInformationEN,
        percentage: 20
    },{
        id: 1,
        stepName: language === LANGUAGES.FRENCH ? BookingComponentStrings.billingAddressFR : BookingComponentStrings.billingAddressEN,
        percentage: 55
    },{
        id: 2,
        stepName: language === LANGUAGES.FRENCH ? BookingComponentStrings.paymentInformationFR : BookingComponentStrings.paymentInformationEN,
        percentage: 80
    },{
        id: 3,
        stepName: language === LANGUAGES.FRENCH ? BookingComponentStrings.doneFR : BookingComponentStrings.doneEN,
        percentage: 99
    }]);

    

    //Forms
    const { 
        register: registerPaymentInfo, 
        formState: paymentFormState,
        handleSubmit: handleSubmitPaymentInfo,
    } = useForm();

    const { 
        register: registerPersonalInfo, 
        formState: generalFormState,
        handleSubmit: handleSubmitPersonalInfo,
    } = useForm();
    const { 
        register: registerFacturationAddress, 
        formState: facturationFormState,
        handleSubmit: handleSubmitFacturationAddress,
    } = useForm();
    const onSubmit = () => {
    }
    //Components
    const InformationComponent = () => {
        return (
            <>
                <h2 className="my-3">{steps[currentStepIndex].stepName}</h2>
                <Form className="w-50" onSubmit={handleSubmitPersonalInfo(onSubmit)}>
                    <Form.Group className={generalFormState.errors.lastName ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.lastNameFR : BookingComponentStrings.lastNameEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.lastNameFR : BookingComponentStrings.lastNameEN}
                        {...registerPersonalInfo("lastName", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {generalFormState.errors.lastName && generalFormState.errors.lastName.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.lastName.message}</p>}
                    <Form.Group className={generalFormState.errors.firstName ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.firstNameFR : BookingComponentStrings.firstNameEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.firstNameFR : BookingComponentStrings.firstNameEN}
                        {...registerPersonalInfo("firstName", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {generalFormState.errors.firstName && generalFormState.errors.firstName.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.firstName.message}</p>}
                    <Form.Group className={generalFormState.errors.phoneNumber ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.phoneNumberFR : BookingComponentStrings.phoneNumberEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control type="text" placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.phoneNumberFR : BookingComponentStrings.phoneNumberEN}
                        {...registerPersonalInfo("phoneNumber", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, pattern: {value: /\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/g, message: language === LANGUAGES.FRENCH ? BookingComponentStrings.phoneNumberPatternFR : BookingComponentStrings.phoneNumberPatternEN}})}/>
                    </Form.Group>
                    {generalFormState.errors.phoneNumber && generalFormState.errors.phoneNumber.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.phoneNumber.message}</p>}
                    {generalFormState.errors.phoneNumber && generalFormState.errors.phoneNumber.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.phoneNumber.message}</p>}
                    <Form.Group className={generalFormState.errors.teacher ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.instructorFR : BookingComponentStrings.instructorEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control as="select" placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.instructorFR : BookingComponentStrings.instructorEN} 
                        {...registerPersonalInfo("teacher", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}>
                            <option>Darren Cahill</option>
                            <option>Tom Rees</option>
                            <option>Nick Bolletieri</option>
                            <option>Patrick Mouratoglou</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className={generalFormState.errors.course ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.courseFR : BookingComponentStrings.courseEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control as="select" placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.courseFR : BookingComponentStrings.courseEN}
                        {...registerPersonalInfo("course", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.beginnerFR : CoursesComponentStrings.beginnerEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.intermediateFR : CoursesComponentStrings.intermediateEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.advancedFR : CoursesComponentStrings.advancedEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.expertFR : CoursesComponentStrings.expertEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.serviceFR : CoursesComponentStrings.serviceEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.backhandFR : CoursesComponentStrings.backhandEN}</option>
                            <option>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.smashFR : CoursesComponentStrings.smashEN}</option>
                        </Form.Control>
                    </Form.Group>
                    {generalFormState.errors.course && generalFormState.errors.course.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.course.message}</p>}
                    <Form.Group>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.dateTimeFR : BookingComponentStrings.dateTimeEN}<sup className="text-danger">*</sup></Form.Label>
                        <Datetime isValidDate={() => {
                            return Math.random() < 0.5;
                        }} />
                    </Form.Group>
                    <Form.Group className={generalFormState.errors.addressLine ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.addressLineEN : BookingComponentStrings.addressLineEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.addressLineFR : BookingComponentStrings.addressLineEN}
                        {...registerPersonalInfo("addressLine", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {generalFormState.errors.addressLine && generalFormState.errors.addressLine.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.addressLine.message}</p>}
                    <Form.Group className={generalFormState.errors.city ? "mb-0" : ""}>
                        <Form.Label >{language === LANGUAGES.FRENCH ? BookingComponentStrings.cityFR : BookingComponentStrings.cityEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.cityFR : BookingComponentStrings.cityEN}
                        {...registerPersonalInfo("city", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {generalFormState.errors.city && generalFormState.errors.city.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.city.message}</p>}
                    <Form.Group className={generalFormState.errors.province ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.provinceFR : BookingComponentStrings.provinceEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.provinceFR : BookingComponentStrings.provinceEN}
                        {...registerPersonalInfo("province", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {generalFormState.errors.province && generalFormState.errors.province.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.province.message}</p>}
                    <Form.Group className={generalFormState.errors.postalCode ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodeFR : BookingComponentStrings.postalCodeEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodeFR : BookingComponentStrings.postalCodeEN}
                        {...registerPersonalInfo("postalCode", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, pattern: {value: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, message: language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodePatternFR : BookingComponentStrings.postalCodePatternEN}})}/>
                    </Form.Group>
                    {generalFormState.errors.postalCode && generalFormState.errors.postalCode.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.postalCode.message}</p>}
                    {generalFormState.errors.postalCode && generalFormState.errors.postalCode.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{generalFormState.errors.postalCode.message}</p>}
                    <Row>
                        <Button variant="danger" type="submit" className="mx-2" onClick={() => {
                            if (generalFormState.isValid) {
                                setCurrentStepIndex(currentStepIndex + 1)
                            }
                        }}>
                        {language === LANGUAGES.FRENCH ? BookingComponentStrings.nextFR : BookingComponentStrings.nextEN}
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
                    <Form.Group className={facturationFormState.errors.addressFactLine ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.addressLineFR : BookingComponentStrings.addressLineEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text"
                        defaultValue=""
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.addressLineFR : BookingComponentStrings.addressLineEN}
                        {...registerFacturationAddress("addressFactLine", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {facturationFormState.errors.addressFactLine && facturationFormState.errors.addressLine.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{facturationFormState.errors.addressFactLine.message}</p>}
                    <Form.Group className={facturationFormState.errors.city ? "mb-0" : ""}>
                        <Form.Label >{language === LANGUAGES.FRENCH ? BookingComponentStrings.cityFR : BookingComponentStrings.cityEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.cityFR : BookingComponentStrings.cityEN}
                        {...registerFacturationAddress("city", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {facturationFormState.errors.city && facturationFormState.errors.city.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{facturationFormState.errors.city.message}</p>}
                    <Form.Group className={facturationFormState.errors.province ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.provinceFR : BookingComponentStrings.provinceEN}<sup className="text-danger">*</sup></Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.provinceFR : BookingComponentStrings.provinceEN}
                        {...registerFacturationAddress("province", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}/>
                    </Form.Group>
                    {facturationFormState.errors.province && facturationFormState.errors.province.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{facturationFormState.errors.province.message}</p>}
                    <Form.Group className={facturationFormState.errors.postalCode ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodeFR : BookingComponentStrings.postalCodeEN}<sup className="text-danger">*</sup> </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodeFR : BookingComponentStrings.postalCodeEN}
                        {...registerFacturationAddress("postalCode", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, pattern: {value: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, message: language === LANGUAGES.FRENCH ? BookingComponentStrings.postalCodePatternFR : BookingComponentStrings.postalCodePatternEN}})}/>
                    </Form.Group>
                    {facturationFormState.errors.postalCode && facturationFormState.errors.postalCode.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{facturationFormState.errors.postalCode.message}</p>}
                    {facturationFormState.errors.postalCode && facturationFormState.errors.postalCode.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{facturationFormState.errors.postalCode.message}</p>}
                <Row>
                    <Button variant="danger" className="mx-2" onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>
                        {language === LANGUAGES.FRENCH ? BookingComponentStrings.previousFR : BookingComponentStrings.previousEN}
                    </Button>
                    <Button variant="danger" type="submit" className="mx-2" onClick={() => {
                        if(facturationFormState.isValid){
                            setCurrentStepIndex(currentStepIndex + 1)
                        }}}>
                        {language === LANGUAGES.FRENCH ? BookingComponentStrings.nextFR : BookingComponentStrings.nextEN}
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
                      <Form.Group className={paymentFormState.errors.number ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.cardNumberFR : BookingComponentStrings.cardNumberEN}</Form.Label>
                        <Form.Control
                        type="tel"
                        maxLength={19}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder={`${language === LANGUAGES.FRENCH ? BookingComponentStrings.cardNumberFR : BookingComponentStrings.cardNumberEN} (ex: 1234 5678 9012 3456)`}
                        {...registerPaymentInfo("number", {
                            required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, 
                            pattern: {
                                value: /[0-9]{4}\ [0-9]{4}\ [0-9]{4}\ [0-9]{4}/g, 
                                message: language === LANGUAGES.FRENCH ? BookingComponentStrings.cardPatternFR : BookingComponentStrings.cardPatternEN
                            }})}
                        onKeyUp={(e:any) => setNumber(e.target.value)}
                        />
                      </Form.Group>
                      {paymentFormState.errors.number && paymentFormState.errors.number.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.number.message}</p>}
                      {paymentFormState.errors.number && paymentFormState.errors.number.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.number.message}</p>}
                      <Form.Group className={paymentFormState.errors.name ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.cardNameFR : BookingComponentStrings.cardNameEN}</Form.Label>
                        <Form.Control
                        {...registerPaymentInfo("name", {required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN})}
                        type="text"
                        onKeyUp={(e:any) => {setName(e.target.value)}}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder={language === LANGUAGES.FRENCH ? BookingComponentStrings.cardNameFR : BookingComponentStrings.cardNameEN} />
                      </Form.Group>
                      {paymentFormState.errors.name && paymentFormState.errors.name.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.name.message}</p>}
                      <Form.Group className={paymentFormState.errors.expiry ? "mb-0" : ""}>
                        <Form.Label>{language === LANGUAGES.FRENCH ? BookingComponentStrings.expirationDateFR : BookingComponentStrings.expirationDateEN}</Form.Label>
                        <Form.Control
                        type="text"
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder={`${language === LANGUAGES.FRENCH ? BookingComponentStrings.expirationDateFR : BookingComponentStrings.expirationDateEN} (ex: 05/23)`}
                        {...registerPaymentInfo("expiry", {
                            required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, 
                            pattern: {
                                value: /[0-9]{2}\/[0-9]{2}/g, 
                                message: language === LANGUAGES.FRENCH ? BookingComponentStrings.expirationDatePatternFR : BookingComponentStrings.expirationDatePatternEN
                            }})}
                        onKeyUp={(e:any) => {setExpiry(e.target.value)}}
                        />
                      </Form.Group>
                      {paymentFormState.errors.expiry && paymentFormState.errors.expiry.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.expiry.message}</p>}
                      {paymentFormState.errors.expiry && paymentFormState.errors.expiry.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.expiry.message}</p>}
                      <Form.Group className={paymentFormState.errors.cvc ? "mb-0" : ""}>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control
                        {...registerPaymentInfo("cvc", {
                            required: language === LANGUAGES.FRENCH ? BookingComponentStrings.requiredFR : BookingComponentStrings.requiredEN, 
                            pattern: {
                                value: /[0-9]{3}/g, 
                                message: language === LANGUAGES.FRENCH ? BookingComponentStrings.cvcPatternFR : BookingComponentStrings.cvcPatternEN
                            }})}
                        type="text"
                        onKeyUp={(e:any) => {setCVC(e.target.value)}}
                        onFocus={(e:any) => {setFocus(e.target.name)}}
                        placeholder="CVC (ex: 123)" />
                      </Form.Group>
                      {paymentFormState.errors.cvc && paymentFormState.errors.cvc.type === "required" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.cvc.message}</p>}
                      {paymentFormState.errors.cvc && paymentFormState.errors.cvc.type === "pattern" && <p className="text-danger"><AiFillExclamationCircle className="mr-1" color="red"/>{paymentFormState.errors.cvc.message}</p>}
                      <Row>
                        <Button variant="danger" className="mx-2" onClick={() => setCurrentStepIndex(currentStepIndex - 1)}>
                        {language === LANGUAGES.FRENCH ? BookingComponentStrings.previousFR : BookingComponentStrings.previousEN}
                        </Button>
                        <Button variant="danger" type="submit" className="mx-2" onClick={() => {
                            console.log(paymentFormState)
                            if(paymentFormState.isValid){
                                setCurrentStepIndex(currentStepIndex + 1)
                            }}}>
                            {language === LANGUAGES.FRENCH ? BookingComponentStrings.nextFR : BookingComponentStrings.nextEN}
                        </Button>
                    </Row>
                    
                    </Form>
                
            </>
        )
    }

    const DoneComponent: React.FC = () => {
        return (
            <>
                <h2 className="my-3">{language === LANGUAGES.FRENCH ? BookingComponentStrings.bookingSuccessFR : BookingComponentStrings.bookingsuccessEN}</h2>
                <Row>
                    <Link to="/SEG3525LabModule9">
                        <Button variant="danger" className="mx-2">
                        {language === LANGUAGES.FRENCH ? BookingComponentStrings.backToMainPageFR : BookingComponentStrings.backToMainPageEN}
                        </Button>
                    </Link>
                </Row>
            </>
        )
    }
    return (
    <Container>
        <HeaderComponent title={language === LANGUAGES.FRENCH ? BookingComponentStrings.pageTitleFR : BookingComponentStrings.pageTitleEN}/>
        <ProgressBar variant="danger" now={steps[currentStepIndex].percentage} label={steps[currentStepIndex].stepName}/>
        {currentStepIndex === 0 ? InformationComponent() :
         currentStepIndex === 1 ? FacturationAddressComponent() :
         currentStepIndex === 2 ? PaymentInformationComponent() :
         currentStepIndex === 3 ? <DoneComponent/> : <></>}
    </Container>
    );
  }

export default ReservationComponent;