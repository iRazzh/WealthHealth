import '../css/Homepage.css';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default function Homepage() {
    return(
        <>
            <Header />
            <main className="homepage">

                <Link to="/hrnet"><button>Accéder à HRNET</button></Link>
            </main>
        </>
    )
}