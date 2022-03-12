import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { AuthContext, useAuth } from "../../providers/auth";

import RecuperarSenha from "./Recovery";

const Cadastro = () => {

  const [input, setInput] = useState({
    nome: ''
  })

  const {setUser} = useAuth()

  

  const handleLogin = () => {
    if (input.nome.length > 0) {
      localStorage.setItem('user',JSON.stringify(input))
      setUser(input)
    }
  }

  return (
    <main className="App-header">
      <section className="fundobranco">
        <fieldset>
          <h1>Cadastro</h1>
          <form>
            <label>CPF:</label>
            <br />
            <input type={"number"} required onChange={(e) => setInput({nome: e.target.value})}></input>
            <br />
            <label>Senha:</label>
            <br />
            <input id="pass" type={"password"}></input>
            <br />
            <br />
            <input
              type={'submit'}
              className="btn btn-primary"
              onClick={handleLogin}
              value={'Cadastrar'} formAction="/perfil"
            ></input>
            
            <br />
          </form>
        </fieldset>
        <br />
        <p>
          Já está cadastrado? Faça login{" "}
          <span>
            <Link to="/login">aqui</Link>
          </span>
        </p>
      </section>
    </main>
  );
};

export default Cadastro;
