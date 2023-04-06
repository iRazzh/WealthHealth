import "../css/Hrnet.css"
import HeaderHRNET from "../components/HeaderHrnet"
import SidebarEmployee from "../components/SidebarEmployee"

import DataTable from 'react-data-table-component';

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

const data = [
    {
        id: 1,
        firstName: 'Tanguy',
        lastName: 'Gerardin',
        startDate: '03/16/2023',
        department: 'Sales',
        dateBirth: '03/17/2023',
        street: 'Lyon',
        city: 'Lyon',
        state: 'AL',
        zip: 6,
    },
    {
        id: 2,
        firstName: 'Tanguy2',
        lastName: 'Gerardin2',
        startDate: '03/16/2023',
        department: 'Sales',
        dateBirth: '03/17/2023',
        street: 'Lyon',
        city: 'Lyon',
        state: 'AL',
        zip: 6,
    },
]

export default function Hrnet() {
    return(
        <>
            <HeaderHRNET />
            <SidebarEmployee />
            <main className="employees">
                {/* onClick, on récupère la modale pour créer un employé  */}
                <button>Create Employee</button>
                
                <h1>Current Employees</h1>
                <DataTable
                    columns={columns}
                    data={data}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </main>

        </>
    )
}