import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Page1 = () => {
    return(
        <>
            <main>
                <section className='App-header2'>
                    <article className='arttext'>
                        <p>Às vezes, precisamos viajar para bem longe para nos encontrarmos bem de perto. Além de um episódio turístico em outro país, outra cultura, outro modo de viver a vida, viajar também pode ser uma jornada para dentro de si mesmo. É pensando assim que um destino não é só um lugar, mas uma nova maneira de enxergar a vida.</p>
                    </article>
                </section>

                <section>
                  <div className='gridcontainer cardsviagens'>
                    <div className="card item1">
                      <img src="https://s2.glbimg.com/PWzElwICb5ItVqUPSQmj6bxMkSY=/620x455/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/cachoeira-de-seljalandsfoss-na-islandia.jpeg?quality=70&strip=info&w=926" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://img.elo7.com.br/product/600x380/2D538E2/papel-de-parede-paisagem-cascata-cachoeira-floresta-gg817-papel-de-parede-cachoeira.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://img.elo7.com.br/product/original/257AA43/painel-adesivo-papel-parede-paisagem-cachoeira-natureza-adesivo-painel-cachoeira.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://http2.mlstatic.com/D_NQ_NP_637912-MLB40486410862_012020-O.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://imagens.mdig.com.br/natureza/belas_cachoeiras_naturais_mundo_22.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://www.bigblueviagens.com.br/wp-content/uploads/2016/10/cachoeira-min-2.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>

                    <div className="card item1">
                      <img src="https://static.vecteezy.com/ti/fotos-gratis/p1/783252-cachoeiras-paisagem-foto.jpg" class="card-img-top" alt="" height={'285px'}/>
                      <div class="card-body">
                        <h5 class="card-title">Voos para o paraíso das cachoeiras – Passagem aérea 2022</h5>
                        <p class="card-text">Para Quem Tem 24 Horas De Flexibilidade O Voo PROMO Tem O Menor Preço Da Internet.</p>
                        <Link to="/users" className="links">Comprar</Link>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className='App-header2'>
                    <article className='arttext'>
                        <p>Viajar tem a ver com viver experiências: quanto mais completa de passeios, culturas, aventuras, descobertas e imersões sua viagem for, mais rico fica seu repertório e mais valem os dias fora de casa. É por isso que a GrandBlueTravel existe, dando diversas opções e segurança em suas escolhas.</p>
                    </article>
                </section>
            </main>
            <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
      </>
    )
}

export default Page1;