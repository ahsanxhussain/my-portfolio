import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Cursor from "./components/CustomCursor/Cursor";
import SideNav from "./components/SideNav/SideNav";
function App() {
  return (
    <div className="App">
      <Cursor />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        
        </Routes>
        {/* <SideNav /> */}
        <About />
        <Projects/>
      </BrowserRouter>
    </div>
  );
}

export default App;
