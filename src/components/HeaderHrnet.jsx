import "../css/HeaderHrnet.css"
import LogoHeaderHrnet from "../assets/logo-wealthhealth.webp"

import { Link } from "react-router-dom"

export default function HeaderHrnet() {
    return(
        <>
            <header className="header-hrnet">
                <Link to="/hrnet"><img className="logo-header-hrnet" src={LogoHeaderHrnet} alt="Logo de Weath Health représentant une sorte de rosace verte." /></Link>
            </header>
        </>
    )
}