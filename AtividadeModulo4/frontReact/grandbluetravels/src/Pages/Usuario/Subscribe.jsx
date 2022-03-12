import React, { Component, useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";

const Acessar = () => {

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
          <h1>Login</h1>
          <form>
            <label>CPF:</label>
            <br />
            <input type="number" required/>
            <br />
            <label>Senha:</label>
            <br />
            <input id="pass" type={"password"} required></input>
            <br />
            <br />
            <input
              type={"submit"}
              className="btn btn-primary"
              onClick={handleLogin}
              value={"Entrar"}
              formAction="/"
            ></input>
            <br />
          </form>
          <br />
          <p>
          Não está cadastrado? Cadastre-se{" "}
          <span>
            <Link to="/cadastro">aqui</Link>
          </span>
          </p>
          <span>
            <Link to="/recovery">Esqueceu sua senha?</Link>
          </span>
        </fieldset>
      </section>
    </main>
  );
};

export default Acessar;
