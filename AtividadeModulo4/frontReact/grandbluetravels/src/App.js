import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import { waitForElementToBeRemoved } from "@testing-library/react";
import RecuperarSenha from "./Pages/recuperarsenha";
import Cadastro from "./Pages/cadastro";

const App = () => {
  return (
    <Router>
      <header>
        <nav className="menu container-fluid" style={{backgroundColor: "lightblue"}}>
          <div className="menu" style={{marginLeft: '0'}}>
            <ul className="listmenu submenu">
              <li>
                <a href="#" className="links menutitle">MENU</a>
                <ul className="submenu">
                <li><Link to="/" className="links">HOME</Link></li>
                  <li><Link to="/users" className="links">DESTINOS</Link></li>
                  <li><Link to="/contact" className="links">ABOUT US</Link></li>
                </ul>
              </li>
              
            </ul>
          </div>
          <div>
            <ul className="listmenu">
              <li><Link to="/login" className="links">LOGIN</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" exact element={<Page1 />} />
        <Route path="/users" element={<Page2 />} />
        <Route path="/contact" element={<Page3 />} />
        <Route path="/login" element={<Page4 />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<RecuperarSenha/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
