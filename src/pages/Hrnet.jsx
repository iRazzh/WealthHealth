import "../css/Hrnet.css"
import HeaderHRNET from "../components/HeaderHrnet"
import SidebarEmployee from "../components/SidebarEmployee"
import CreateEmployee from "../components/CreateEmployee"

import { Link } from "react-router-dom"

export default function Hrnet() {
    return(
        <>
            <HeaderHRNET />
            <SidebarEmployee />
            <main className="hrnet">

                <Link to="/current-employees"><button className="btn-employees">Employees</button></Link>
                <CreateEmployee />
            </main>
        </>
    )
}