import "./styles.css";
import { Routes, Route } from "react-router-dom";

// modules
import Home from "./components/Home/Home.component";
import Navbar from "./components/Navbar/Navbar.component";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
