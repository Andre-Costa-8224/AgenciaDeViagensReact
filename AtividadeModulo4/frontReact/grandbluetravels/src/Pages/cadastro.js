import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Cadastro = () => {
    return(
        
        <body>
        <main className='App-header'>
            <section>
                <fieldset>
                    <h1>Cadastro</h1>
                    <form>
                        <label>Nome:</label>
                        <br/>
                        <input type={'text'}></input>
                        <br/>
                        <label>CPF:</label>
                        <br/>
                        <input type={'number'}></input>
                        <br/>
                        <label>Email:</label>
                        <br/>
                        <input type={'email'}></input>
                        <br/>
                        <label>Senha:</label>
                        <br/>
                        <input id='pass' type={'password'}></input>
                        <br/>
                        <br/>
                        <input type={'submit'} className='btn btn-primary' value={'Cadastrar'}></input>
                        <br/>
                    </form>
                </fieldset>
            </section>
        </main>
        <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
        </body>
        
        
    )
}

export default Cadastro;