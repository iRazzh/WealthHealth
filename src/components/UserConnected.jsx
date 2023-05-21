import "../css/UserConnected.css"
import User from "../assets/user.png"

/**
 * Will allow to simulate (for the MVP) a connected employee
 * @param {*} props The use of props in this component will allow to manage the button 
 * @returns 'UserConnected' component
 */
export default function UserConnected(props) {
    return(
        <section className="employee-connected">
            <div>
                <img src={User} alt="Logo d'un utilisateur." />
                <p>John Doe</p>
            </div>
            <button onClick={props.onClick}>{props.toggleText}</button>

        </section>
    )
}