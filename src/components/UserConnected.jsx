import "../css/UserConnected.css"
import User from "../assets/user.png"

export default function UserConnected(props) {
    return(
        <section className="employee-connected">
            <div>
                <img src={User} alt="Logo d'un utilisateur." />
                <p>John Doe</p>
            </div>
            {
                props.setModalOpen ? 
                    null
                :
                <button onClick={props.onClick}>{props.toggleText}</button>
            }
        </section>
    )
}