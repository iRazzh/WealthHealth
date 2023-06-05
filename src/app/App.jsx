import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Employees from '../pages/Employees';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hrnet" element={<Employees />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  )
}