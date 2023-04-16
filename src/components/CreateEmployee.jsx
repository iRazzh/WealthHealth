import '../css/CreateEmployee.css';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itsFirstname, itsLastname, itsDateOfBirth, itsStartDate, itsStreet, itsCity, itsState, itsZip, itsDepartment } from "../app/reducer"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function CreateEmployee(props) {
    const [value, onChange] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);

    const [ itsFirstnameAdded, itsLastnameAdded, itsDateOfBirthAdded, itsStartDateAdded, itsStreetAdded, itsCityAdded, itsStateAdded, itsZipAdded, itsDepartmentAdded ] = useSelector((state) => [ state.itsFirstname, state.itsLastname, state.itsDateOfBirth, state.itsStartDate, state.itsStreet, state.itsCity, state.itsState, state.itsZip, state.itsDepartment])

    const [firstName, setItsFirstName] = useState(itsFirstnameAdded);
    const [lastName, setItsLastName] = useState(itsLastnameAdded);
    const [birthDate, setItsBirthDate] = useState(itsDateOfBirthAdded);
    const [startDate, setItsStartDate] = useState(itsStartDateAdded);
    const [street, setItsStreet] = useState(itsStreetAdded);
    const [city, setItsCity] = useState(itsCityAdded);
    const [state, setItsState] = useState(itsStateAdded);
    const [zipCode, setItsZipCode] = useState(itsZipAdded);
    const [department, setItsDepartment] = useState(itsDepartmentAdded);

    const dispatch = useDispatch();
    
    const employee = {
        firstName,
        lastName,
        birthDate,
        startDate,
        street, 
        city,
        state,
        zipCode,
        department
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(itsFirstname(employee))
        dispatch(itsLastname(employee))
        dispatch(itsStreet(employee))
        dispatch(itsCity(employee))
        dispatch(itsZip(employee))
    }

    console.log(employee)
    /*console.log(itsFirstname(employee))
    console.log(itsLastname(employee))
    console.log(itsStreet(employee))
    console.log(itsCity(employee))
    console.log(itsZip(employee))*/
    
    return(
        <>
            <h2>Create Employee</h2>
            <button onClick={props.onClick}>Close</button>
            <form className="form-create-employee" onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="FirstName">First Name</label>
                    <input id="FirstName" type="text" name="firstname" value={itsFirstnameAdded} onChange={(e) => setItsFirstName(e.target.value)}/>
                </section>

                <section>
                    <label htmlFor="LastName">Last Name</label>
                    <input id="LastName" type="text" name="lastname" value={itsLastnameAdded} onChange={(e) => setItsLastName(e.target.value)} />
                </section>
                
                <section>
                    <label htmlFor="DateOfBirth">Date of Birth</label>
                    <DatePicker onChange={onChange} value={value} />
                </section>

                <section>
                    <label htmlFor="StartDate">Start Date</label>
                    <DatePicker onChange={onChange} value={value} />
                </section>

                <section>
                    <label htmlFor="Street">Street</label>
                    <input id="Street" type="text" name="street" value={itsStreetAdded} onChange={(e) => setItsStreet(e.target.value)} />
                </section>

                <section>
                    <label htmlFor="City">City</label>
                    <input id="City" type="text" name="city" value={itsCityAdded} onChange={(e) => setItsCity(e.target.value)} />
                </section>

                <section>
                    <label htmlFor="State">State</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </section>
                
                <section>
                    <label htmlFor="StartDate">Zip Code</label>
                    <input id="Zip Code" type="number" name="zip" value={itsZipAdded} onChange={(e) => setItsZipCode(e.target.value)} />
                </section>

                <section>
                    <label htmlFor="Department">Department</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </section>
                <input type="submit" name="submit" value="submit" />
            </form>
        </>
    )
}