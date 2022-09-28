import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
