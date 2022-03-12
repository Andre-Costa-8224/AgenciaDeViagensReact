import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cabecalho from "./Pages/Home/Header";
import Secao1 from "./Pages/Home/Section";
import Destinos from "./Pages/Viagens/Destination";
import Acessar from "./Pages/Usuario/Login";
import { waitForElementToBeRemoved } from "@testing-library/react";
import RecuperarSenha from "./Pages/Usuario/Recovery";
import Cadastro from "./Pages/Usuario/Subscribe";
import { Rodape } from "./Pages/Home/Footer";
import Sobre from "./Pages/Home/About";
import { AuthContext, useAuth } from "./providers/auth";
import Perfil from "./Pages/Usuario/Profile";

const App = () => {

  const {user} = useAuth();
  const userStorage = localStorage.getItem("user");

  console.log(user.nome)
  console.log(user.nome == "")

  var caminho = <Secao1 />

  if (userStorage == null) {
    caminho = <Acessar />
  }
  else{
    caminho = <Secao1 />
  }

  //console.log(userStorage)

  return (
    <div>
    <Router>
    <Cabecalho/>
      <Routes>
        <Route path="/" exact element={<Secao1 />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path='/cadastro' element={caminho}/>
        <Route path="/login" element={<Cadastro />} />
        <Route path="/recovery" element={<RecuperarSenha/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
      </Routes>
    </Router>
    <Rodape/>
    </div>
  );
};

export default App;
