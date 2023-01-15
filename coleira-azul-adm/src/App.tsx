import { AddItensPG } from "./pages/addItens/AddItens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPG } from "./pages/login/Login";

import './global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPG/>}/>
        <Route path="/add-itens" element={<AddItensPG/>}/>
      </Routes>
    </Router>
  )
}

export default App;