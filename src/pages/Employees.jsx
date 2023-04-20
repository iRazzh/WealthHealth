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
        name: 'Start Date',
        selector: row => row.startDate,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateBirth,
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
        name: 'Zip Code',
        selector: row => row.zip,
    },
];


export default function Hrnet() {
    const [ setModalOpen, isModalOpen ] = useState(false);
    const handleClick = () => {
        isModalOpen(!setModalOpen);
    }

    const employees = useSelector((state) => state.employees)
    console.log(employees)

    const employeesFirstname = useSelector((state) => state.employees.firstName)
    const employeesLastname = useSelector((state) => state.employees.lastName)
    const employeesStreet = useSelector((state) => state.employees.street)
    const employeesCity = useSelector((state) => state.employees.city)
    const employeesZipCode = useSelector((state) => state.employees.zip)
    
    const data = [
        {
            id: 1,
            firstName: employeesFirstname,
            lastName: employeesLastname,
            startDate: null,
            department: null,
            dateBirth: null,
            street: employeesStreet,
            city: employeesCity,
            state: null,
            zip: employeesZipCode,
        },
    ]
    
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

                <DataTable columns={columns} data={data} expandableRows  expandableRowsComponent={ExpandedComponent} />

            </main>
        </>
    )
}