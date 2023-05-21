import "../css/HeaderEmployees.css"
import LogoHeaderHrnet from "../assets/logo-wealthhealth.webp"
import UserConnected from "./UserConnected" 
import LastEmployees from "./LastEmployees"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

/**
 * Allows the header to be displayed when "logged in" (by clicking on the HRNet button for the MVP)
 * @param {*} props The use of props on this component will allow to manage the toggle of the modal with the "create an employee" button
 * @returns 'HeaderHrnet' component
 */
export default function HeaderHrnet(props) {
    const employees = useSelector((state) => state.employees.allEmployees)
    const lastEmployee = employees[employees.length - 1]?.newEmployee[0];
    const secondToLastEmployee = employees[employees.length - 2]?.newEmployee[0];

    return(
        <>
            <header className="header-hrnet">
                <Link to="/hrnet"><img className="logo-header-hrnet" src={LogoHeaderHrnet} alt="Logo de Weath Health représentant une sorte de rosace verte." /></Link>

                <UserConnected onClick={props.handleClick} setModalOpen={props.setModalOpen} toggleText={"Create an employee"} />  
                <hr />
                <section className="header-employee-added">
                    <h2>Last employees added</h2>
                    <LastEmployees firstName={lastEmployee?.firstName} lastName={lastEmployee?.lastName} department={lastEmployee?.department} zipCode={lastEmployee?.zipCode}/>
                    <LastEmployees firstName={secondToLastEmployee?.firstName} lastName={secondToLastEmployee?.lastName} department={secondToLastEmployee?.department} zipCode={secondToLastEmployee?.zipCode}/>
                </section>
            </header>
        </>
    )
}