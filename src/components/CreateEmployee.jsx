import '../css/CreateEmployee.css';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useState } from 'react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function CreateEmployee() {
    const [value, onChange] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);

    return(
        <>
            <h2>Create Employee</h2>

            <form className="form-create-employee">
                <section>
                    <label htmlFor="FirstName">First Name</label>
                    <input id="FirstName" type="text" />
                </section>

                <section>
                    <label htmlFor="LastName">Last Name</label>
                    <input id="LastName" type="text" />
                </section>
                
                <section>
                    <label htmlFor="">Date of Birth</label>
                    <DatePicker onChange={onChange} value={value} />
                </section>

                <section>
                    <label htmlFor="StartDate">Start Date</label>
                    <DatePicker onChange={onChange} value={value} />
                </section>

                <section>
                    <label htmlFor="Street">Street</label>
                    <input id="Street" type="text" />
                </section>

                <section>
                    <label htmlFor="City">City</label>
                    <input id="City" type="text" />
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
                    <input id="Zip Code" type="number" />
                </section>

                <section>
                    <label htmlFor="Department">Department</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </section>
            </form>
        </>
    )
}