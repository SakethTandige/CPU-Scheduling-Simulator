import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Simulator from "./components/Simulator";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;