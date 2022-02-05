import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import RecuperarSenha from './recuperarsenha';

const Page4 = () => {
    return(
        
        <body>
        <main className='App-header'>
            <section className='fundobranco'>
                <fieldset>
                    <h1>Login</h1>
                    <form>
                        <label>CPF:</label>
                        <br/>
                        <input type={'number'}></input>
                        <br/>
                        <label>Senha:</label>
                        <br/>
                        <input id='pass' type={'password'}></input>
                        <br/>
                        <br/>
                        <input type={'submit'} className='btn btn-primary' value={'Entrar'}></input>
                        <br/>
                    </form>
                    <br/>
                    <span><Link to="/recovery">Esqueceu sua senha?</Link></span>
                </fieldset>
                <br/>
                <p>Não está cadastrado? Cadastre-se <span><Link to="/cadastro">aqui</Link></span></p>
            </section>
        </main>
        <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
        </body>
        
        
    )
}

export default Page4;