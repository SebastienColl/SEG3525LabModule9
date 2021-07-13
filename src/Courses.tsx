import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import { courses } from "./mockdata"
import { Link } from 'react-router-dom';
import { BiNote } from "react-icons/bi"
interface CoursesComponentProps {

}

const CoursesComponent: React.FC<CoursesComponentProps> = () => {
    return (
        <Container>
            <HeaderComponent title="Cours"/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Durée</th>
                        <th>Coût</th>
                        <th>Réserver</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: any) => {
                        return (
                            <tr>
                                <td>{course.name}</td>
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