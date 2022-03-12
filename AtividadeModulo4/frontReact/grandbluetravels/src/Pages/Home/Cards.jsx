import { Link } from "react-router-dom";

const Passagem = () => {

  const cards = {
    nome: ['globo do mar','olho de arco íris','bosque','espelho natural'],
    foto: ["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg","https://static8.depositphotos.com/1003924/886/i/600/depositphotos_8868243-stock-photo-spectrum-multicolored-eye-macro.jpg","https://st.depositphotos.com/1780879/3816/i/600/depositphotos_38166573-stock-photo-trees-with-sunbeams.jpg","http://s2.glbimg.com/h3Duok3KWVA8yaIOzZZIESkNLC4DKPsVVGWWhNMHhpNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/02/imagem_para_sexta_51.jpg"],
    desc: ["viagem para um globo","viagem para um arco-íris","viagem para um bosque","viagem para um tipo de lago"]
  } 

  return (
    <div>
      <section className="carditem">
      
        {cards.nome.map((nome,valor) => {return <div className="divcard" key={valor}>
          <img
            src={cards.foto[valor]}
            className="card-img-top"
            alt={nome}
          />
          <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">
              {cards.desc[valor]}
            </p>
            <Link to={'/destinos'} className="btn btn-primary">
              comprar
            </Link>
          </div>
        </div>})}
        
      </section>
    </div>
  );
};

export default Passagem;
