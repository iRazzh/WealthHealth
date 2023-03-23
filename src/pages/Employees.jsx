import "../css/Employees.css";
import HeaderHRNET from "../components/HeaderHrnet"
import SidebarEmployee from "../components/SidebarEmployee"

export default function Employees() {
    return(
        <>
            <HeaderHRNET />
            <SidebarEmployee />
            <main className="employees">
                <h1>Current Employees</h1>
            </main>
        </>
    )
}