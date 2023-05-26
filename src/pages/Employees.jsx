import "../css/Employees.css"
import "../css/Modal.css"
import HeaderEmployees from "../components/HeaderEmployees"
import CreateEmployee from "../components/CreateEmployee";
import { useSelector } from "react-redux"
import { useState } from "react";

import DataTable from 'react-data-table-component';
import { Modal } from "react-modal-component-tool";

import { columnsTable } from "../app/datas";

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
    
    return(
        <>
            <HeaderEmployees handleClick={handleClick} setModalOpen={setModalOpen} />
            <main className="employees">
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

                <DataTable columns={columnsTable} data={employees} />
            </main>
        </>
    )
}