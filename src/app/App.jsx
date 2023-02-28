import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Employees from '../pages/Employees';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/current-employees" element={<Employees />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  )
}

