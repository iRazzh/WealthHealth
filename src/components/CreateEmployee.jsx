import '../css/CreateEmployee.css';
import DatePicker from 'react-date-picker'
import { useState } from 'react';

export default function CreateEmployee() {
    const [value, onChange] = useState(new Date());

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
                    <input id="State" type="text" />
                </section>
                
                <section>
                    <label htmlFor="StartDate">Zip Code</label>
                    <input id="Zip Code" type="number" />
                </section>

                <section>
                    <label htmlFor="Department">Department</label>
                    <input id="Department" type="text" />
                </section>
            </form>
        </>
    )
}