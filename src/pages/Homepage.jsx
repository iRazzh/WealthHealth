import '../css/Homepage.css';
import { Link } from 'react-router-dom';

import Header from "../components/Header";

export default function Homepage() {
    return(
        <>
            <Header />
            <Link to="/current-employees">Employé</Link>
        </>
    )
}