import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Homepage from "../pages/Homepage"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

