import "../css/Employees.css"
import "../css/Modal.css"
import HeaderEmployees from "../components/HeaderEmployees"
import SidebarEmployees from "../components/SidebarEmployees"
import UserConnected from "../components/UserConnected"
import CreateEmployee from "../components/CreateEmployee";
import { useSelector } from "react-redux"
import { useState } from "react";

import DataTable from 'react-data-table-component';
import { Modal } from "react-modal-component-tool";

// A super simple expandable component.
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
    },
    {
        name: 'Date of Birth',
        selector: row => row.birthDate,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
    },
    {
        name: 'Street',
        selector: row => row.street,
    },
    {
        name: 'City',
        selector: row => row.city,
    },
    {
        name: 'State',
        selector: row => row.state,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
    },
];


export default function Hrnet() {
    const [ setModalOpen, isModalOpen ] = useState(false);
    const handleClick = () => {
        isModalOpen(!setModalOpen);
    }

    // We retrieve the "allEmployees" array established in the reducer which stores the values.
    // We loop it to return each new employee.
    const employees = useSelector((state) => state?.employees.allEmployees.map((employee) => {
        return employee.newEmployee[0];
    }))
    console.log(employees)
    
    return(
        <>
            <HeaderEmployees />
            <SidebarEmployees />
            <main className="employees">
                <UserConnected onClick={handleClick} setModalOpen={setModalOpen} toggleText={setModalOpen ? null : "Create an employee"}  />

                {setModalOpen ? 
                    <>
                        <Modal addCSS="testMVP">
                            <CreateEmployee onClick={handleClick} />
                        </Modal>
                    </>
                    :
                    null
                }

                <h1>Current Employees</h1>

                <DataTable columns={columns} data={employees} expandableRows  expandableRowsComponent={ExpandedComponent} />

            </main>
        </>
    )
}