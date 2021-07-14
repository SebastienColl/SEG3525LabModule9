import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import { courses } from "./mockdata"
import { Link } from 'react-router-dom';
import { BiNote } from "react-icons/bi"
import { CoursesComponentStrings, LANGUAGES } from './Strings';
interface CoursesComponentProps {
    language: string;
}

const CoursesComponent: React.FC<CoursesComponentProps> = ({language}) => {
    return (
        <Container>
            <HeaderComponent title={language === LANGUAGES.FRENCH ? CoursesComponentStrings.pageTitleFR : CoursesComponentStrings.pageTitleEN}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.nameFR : CoursesComponentStrings.nameEN}</th>
                        <th>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.durationFR : CoursesComponentStrings.durationEN}</th>
                        <th>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.costFR : CoursesComponentStrings.costEN}</th>
                        <th>{language === LANGUAGES.FRENCH ? CoursesComponentStrings.reserveFR : CoursesComponentStrings.reserveEN}</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: any) => {
                        return (
                            <tr>
                                <td>{language === LANGUAGES.FRENCH ? course.name.FR : course.name.EN}</td>
                                <td>{course.duration} minutes</td>
                                <td>{course.price}$ </td>
                                <td>
                                    <Link to="/SEG3525LabModule9/reservation"><Button variant="danger" style={{width:"100%"}}><BiNote/></Button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
        </Container>
    )
}

export default CoursesComponent;