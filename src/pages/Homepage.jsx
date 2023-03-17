import '../css/Homepage.css';
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import CreateEmployee from "../components/CreateEmployee.jsx";

export default function Homepage() {
    return(
        <>
        <main className="homepage">
            <Header />
            <Link to="/current-employees">View Current Employees</Link>

            <CreateEmployee/ >
        </main>
        </>
    )
}