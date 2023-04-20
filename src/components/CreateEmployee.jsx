import '../css/CreateEmployee.css';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itsFirstname, itsLastname, itsDateOfBirth, itsStartDate, itsStreet, itsCity, itsState, itsZip, itsDepartment } from "../app/reducer"

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
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(itsFirstname(firstName))
        dispatch(itsLastname(lastName))
        dispatch(itsStreet(street))
        dispatch(itsCity(city))
        dispatch(itsZip(zipCode))
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    
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
                        <DatePicker onChange={onChange} value={value} />
                    </div>

                    <div>
                        <label htmlFor="StartDate">Start Date</label>
                        <DatePicker onChange={onChange} value={value} />
                    </div>
                </section>

                <section className="street-city">
                    <input id="Street" placeholder="Street" type="text" name="street" onChange={(e) => setItsStreet(e.target.value)} />
                    <input id="City" placeholder="City" type="text" name="city" onChange={(e) => setItsCity(e.target.value)} />
                </section>

                <section className="state-department">
                    <div>
                        <label htmlFor="State">State</label>
                        <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                    </div>
                    
                    <div>
                        <label htmlFor="Department">Department</label>
                        <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
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