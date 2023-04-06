import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Hrnet from '../pages/Hrnet';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/hrnet" element={<Hrnet />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Router>
  )
}