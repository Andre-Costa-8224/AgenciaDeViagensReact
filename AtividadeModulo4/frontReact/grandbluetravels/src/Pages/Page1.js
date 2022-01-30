import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Page1 = () => {
    return(
        <body>
            <main>
                <section className='App-header2'>
                    <article className='arttext'>
                        <p>Às vezes, precisamos viajar para bem longe para nos encontrarmos bem de perto. Além de um episódio turístico em outro país, outra cultura, outro modo de viver a vida, viajar também pode ser uma jornada para dentro de si mesmo. É pensando assim que um destino não é só um lugar, mas uma nova maneira de enxergar a vida.</p>
                    </article>
                </section>
                <section>
                <div id="carouselExampleControls" class="carousel slide carr" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" class="d-block w-100 carrimgs" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.artesanatototal.com/wp-content/uploads/2019/02/Imagens-de-paisagens4.jpg" class="d-block w-100 carrimgs" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://blog.tudoprafoto.com/wp-content/uploads/2017/09/imagens-natureza-paisagens-42.jpg" class="d-block w-100 carrimgs" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </section>
                <section className='App-header2'>
                    <article className='arttext'>
                        <p>Viajar tem a ver com viver experiências: quanto mais completa de passeios, culturas, aventuras, descobertas e imersões sua viagem for, mais rico fica seu repertório e mais valem os dias fora de casa. É por isso que a GrandBlueTravel existe, dando diversas opções e segurança em suas escolhas.</p>
                    </article>
                </section>
            </main>
            <footer className='rodape'><span>&copy; André F S Costa - Contato: andrecosta8224@gmail.com</span></footer>
        </body>
    )
}

export default Page1;