import '../css/CreateEmployee.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from "../app/reducer"
import { dateFormat } from "../app/formats"
import { dataStates, dataDepartments } from "../app/datas";

export default function CreateEmployee(props) {

    // useState for all inputs values
    const [firstName, setItsFirstName] = useState("");
    const [lastName, setItsLastName] = useState("");
    const [birthDate, setItsBirthDate] = useState("");
    const [startDate, setItsStartDate] = useState("");
    const [street, setItsStreet] = useState("");
    const [city, setItsCity] = useState("");
    const [state, setItsState] = useState(null);
    const [department, setItsDepartment] = useState(null);
    const [zipCode, setItsZipCode] = useState("");

    // Retrieves the const from the useState and stores it in an array of objects.
    // This is what will allow us to store the values of the new employee in Redux.
    const newEmployee = [
        {
            firstName,
            lastName,
            birthDate: dateFormat(new Date(birthDate)),
            startDate: dateFormat(new Date(startDate)),
            street,
            city,
            state,
            department,
            zipCode,
        },
    ];

    const handleChange = (selectedOption) => {
        setItsState(selectedOption.label);
    };
    const handleChangeDepartment = (selectedOption) => {
        setItsDepartment(selectedOption.label);
    };

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch the "newEmployee" by using "addEmployee" from the reducer.
        // We put "newEmployee" in the "payload" so that it can be taken by "addEmployee" to push datas into the "allEmployee" array.
        dispatch(addEmployee({ newEmployee }));
    }
    
    return(
        <>
            <section className="title-btn">
                <h2>Create an employee</h2>
                <button className="close-btn" onClick={props.onClick}>✖</button>
            </section>
            <form className="form-create-employee" onSubmit={handleSubmit}>
                <section className="first-last-name">
                    <input id="FirstName" placeholder="Firstname" type="text" name="firstname" onChange={(e) => setItsFirstName(e.target.value)}/>
                    <input id="LastName" placeholder="Lastname" type="text" name="lastname" onChange={(e) => setItsLastName(e.target.value)} />
                </section>
                
                <section className="birth-start-date">
                    <div>
                        <label htmlFor="DateOfBirth">Date of Birth</label>
                        <DatePicker selected={birthDate} onChange={(date) => setItsBirthDate(date)} showIcon dateFormat={"dd/MM/yyyy"} />
                    </div>      

                    <div>
                        <label htmlFor="StartDate">Start Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setItsStartDate(date)} showIcon dateFormat={"dd/MM/yyyy"} />
                    </div>
                </section>

                <section className="street-city">
                    <input id="Street" placeholder="Street" type="text" name="street" onChange={(e) => setItsStreet(e.target.value)} />
                    <input id="City" placeholder="City" type="text" name="city" onChange={(e) => setItsCity(e.target.value)} />
                </section>

                <section className="state-department">
                    <div>
                        <label htmlFor="State">State</label>
                        <Select options={dataStates} onChange={handleChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="Department">Department</label>
                        <Select options={dataDepartments} onChange={handleChangeDepartment} />
                    </div>
                </section>
                
                <section className="zip">
                    <label htmlFor="StartDate">Zip Code</label>
                    <input id="Zip Code" placeholder="0" type="number" name="zip" onChange={(e) => setItsZipCode(e.target.value)} />
                </section>

                <input className="submit-btn" type="submit" name="submit" value="Submit" />
            </form>
        </>
    )
}