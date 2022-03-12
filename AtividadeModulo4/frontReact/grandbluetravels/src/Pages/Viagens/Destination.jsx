import React, { Component } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";

const Destinos = () => {
  const lugares = ["alemanha", "brasil", "china", "dinamarca", "egito", "frança", "grécia", "holanda", "itália"];

  return (
    <div>
      <main className="App-header">
        <section className="fundobranco">
          <fieldset>
            <h1>Voos</h1>
            <form>
              <label>Escolha um destino:</label>
              <br />
              <select name="" id="">
              {lugares.map( (lug, valor) => {return    <option key={valor}>{lug}</option>}
              )}
              </select>
              <br />
              <label>Quantidade de passagens:</label>
              <br />
              <input type={"number"} required></input>
              <br />
              <label>Data e hora:</label>
              <br />
              <input type={"datetime-local"}></input>
              <br />
              <br />
              <input onClick={useLinkClickHandler('/perfil')} type={"submit"} className="btn btn-primary"></input>
              <br />
            </form>
          </fieldset>
        </section>
      </main>
    </div>
  );
};

export default Destinos;
