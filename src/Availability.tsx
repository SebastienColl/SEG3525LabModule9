import React from 'react';
import { Container, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';

interface AvailabilityComponentProps {

}

const AvailabilityComponent: React.FC<AvailabilityComponentProps> = () => {
    const [colors, setColors] = useState([
        "#ff9999",
        "#00FF7F"
    ])
    const [date, setDate] = useState<Date>(new Date());
    return (
        <Container>
            <HeaderComponent title="Disponibilité des terrains"/>
            En date de:
            <Datetime onChange={() => setColors(["#ff9999", "#00FF7F"])} initialValue={date} timeFormat={false} className="w-25 mb-4" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Terrain 1</th>
                        <th>Terrain 2</th>
                        <th>Terrain 3</th>
                        <th>Terrain 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>10h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>11h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>12h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>13h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>14h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>15h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>16h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                    <tr>
                        <td>17h</td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                        <td style={{backgroundColor: colors[Math.floor(Math.random() * 2)]}}></td>
                    </tr>
                </tbody>
                </Table>
                <Table borderless className="w-25">
                    <tbody>
                        <tr>
                            <td style={{backgroundColor:"#00FF7F"}}></td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#ff9999"}}></td>
                            <td>Réservé</td>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    )
}

export default AvailabilityComponent;