import React, { Component } from 'react';

const RecuperarSenha = () => {
    return(
        <body>
            <main className='App-header'>
                <section className='fundobranco'>
                    <form>
                        <label>Email para recupeção de senha: </label>
                        <br/><br/>
                        <input type={'email'}></input>
                        <br/>
                        <br/>
                        <input type={'submit'} className='btn btn-primary' value={'recuperar'}></input>
                    </form>
                </section>
            </main>
            <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
        </body>
    )
}

export default RecuperarSenha;