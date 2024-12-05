import './App.scss';
import Eu from '../assets/foto.png';
import Header from '../components/header/header';
import Card from '../components/card-habilidade/card';
import Sql from '../assets/mysql.png';
import Js from '../assets/java.png';
import Html from '../assets/images-removebg-preview.png';
import React1 from '../assets/react.png';
import Node from '../assets/node.png';
import Projetu from '../components/card-projeto/projeto';
import Site from '../assets/site.png';
import Cv from '../assets/Cv.pdf';

function App() {
  const cards = [
    { imagem: Js, nome: 'Java Script', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Node, nome: 'NodeJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Html, nome: 'Html', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: React1, nome: 'ReactJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Sql, nome: 'MySQL', descricao: 'Linguagem de programação para o front-end e back-end.' }
  ];

  const fazerDownload = () => {
    const link = document.createElement('a');  
    link.href = Cv;  
    link.download = 'Cv_NicolasVoltareli.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  function enviarMensagemWhatsApp() {
    const url = `https://wa.me/5511981256503?text=${encodeURIComponent('Olá Nicolas, vim pelo seu site portifólio!')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="principal">
      <div className="fundo">
        <Header />

        <section id="home">
          <div className="lang">
            <div className="infos">
              <h2 className="nom1">
                Olá, Sou o <br /> <span className="nome">Nicolas Voltareli</span>
              </h2>
              <p>Seu desenvolvedor <strong>full-stack</strong></p>

              <div className="curriculo-contato">
                <div className="botao1">
                  <button onClick={fazerDownload} className="curriculo">Download CV</button>
                </div>

                <div className="botao2">
                 
                    <button onClick={enviarMensagemWhatsApp} className="">Entre em contato</button>
               
                </div>
              </div>
            </div>

            <div className="foto">
              <img src={Eu} alt="Foto de Nicolas Voltareli" />
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="sobre">
            <h1>Sobre mim</h1>
            <p>
              Sou desenvolvedor Full Stack iniciante, com conhecimentos em JavaScript, Node.js, React.js e MySQL. Formado em Técnico em Desenvolvimento de Sistemas pelo Instituto Social Nossa Senhora de Fátima, estou em busca de oportunidades para aplicar minhas habilidades no desenvolvimento de aplicações completas, tanto no front-end quanto no back-end. Meu objetivo é continuar aprendendo e crescer profissionalmente, contribuindo para projetos desafiadores e de impacto.
            </p>
          </div>
        </section>

        <section id="habilidades">
          <div className="habilidades">
            <div className="titulo">
              <h1>Minhas habilidades</h1>
            </div>

            <div className="conetudo">
              {cards.map((card, index) => (
                <Card key={index} imagem={card.imagem} nome={card.nome} descricao={card.descricao} />
              ))}
            </div>
          </div>
        </section>

        <section id="projetos">
          <div className="Projetos">
            <div className="titulo">
              <h1>Meus Projetos</h1>
              <div className="linha"></div>
            </div>
            <div className="meus-trabalhos">
              <a href="http://4.172.207.208:3056/">
                <Projetu
                  imagem={Site}
                  titulo="Doctor's Health"
                  descricao="TCC"
                  data="28 de outubro de 2024"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
