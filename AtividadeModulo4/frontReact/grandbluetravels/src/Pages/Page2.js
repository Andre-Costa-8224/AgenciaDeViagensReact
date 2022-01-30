import React, { Component } from 'react';

const Page2 = () => {
    return(
        <body>
            <main className='App-header'>
            <fieldset>
                    <h1>Voos</h1>
                    <form>
                        <label>Escolha um destino:</label>
                        <br/>
                        <select>
                            
                            <option>EUA</option>
                            
                            <option>Caribe</option>
                            <option>Portugal</option>
                            <option>Havai</option>
                            <option>Japão</option>
                            <option>Holanda</option>
                            <option>Inglaterra</option>
                            <option>Australia</option>
                            <option>China</option>
                            <option>Africa do sul</option>
                            <option>Italia</option>
                            <option>México</option>
                            <option>Argentina</option>
                            <option>França</option>
                        </select>
                        <br/>
                        <label>Quantidade de passagens:</label>
                        <br/>
                        <input type={'number'}></input>
                        <br/>
                        <label>Data e hora:</label>
                        <br/>
                        <input type={'datetime-local'}></input>
                    </form>
                    <br/>
                    <input type={'submit'} className='btn btn-primary'></input>
                    <br/>
                </fieldset>
            </main>
            <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
        </body>
    )
}

export default Page2;