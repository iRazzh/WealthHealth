import "../css/Header.css";
import LogoHeader from "../assets/logo-wealthhealth.webp"

/**
 * Allows you to display the very first header of the application
 * @returns 'Header' component
 */
export default function Header() {
    return(
        <>
        <header>
            <img className="logo-homepage" src={LogoHeader} alt="Logo de Weath Health représentant une sorte de rosace verte." />
            <h1>Wealth Health</h1>
        </header>
        </>
    )
}