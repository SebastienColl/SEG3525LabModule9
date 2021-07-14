import React from 'react';
import { Container, Table } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import HeaderComponent from './Header';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import { AvailabilitiesComponentStrings, LANGUAGES } from './Strings';

interface AvailabilityComponentProps {
    language: string;
}

const AvailabilityComponent: React.FC<AvailabilityComponentProps> = ({language}) => {
    const [colors, setColors] = useState([
        "#ff9999",
        "#00FF7F"
    ])
    const [date, setDate] = useState<Date>(new Date());
    return (
        <Container>
            <HeaderComponent title="Disponibilité des terrains"/>
            {language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.atFR : AvailabilitiesComponentStrings.atEN}
            <Datetime onChange={() => setColors(["#ff9999", "#00FF7F"])} initialValue={date} timeFormat={false} className="w-25 mb-4" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.fieldFR : AvailabilitiesComponentStrings.fieldEN} 1</th>
                        <th>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.fieldFR : AvailabilitiesComponentStrings.fieldEN} 2</th>
                        <th>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.fieldFR : AvailabilitiesComponentStrings.fieldEN} 3</th>
                        <th>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.fieldFR : AvailabilitiesComponentStrings.fieldEN} 4</th>
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
                            <td>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.availableFR : AvailabilitiesComponentStrings.availableEN}</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#ff9999"}}></td>
                            <td>{language === LANGUAGES.FRENCH ? AvailabilitiesComponentStrings.reservedFR : AvailabilitiesComponentStrings.reservedEN}</td>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    )
}

export default AvailabilityComponent;