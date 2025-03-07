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
import automacao from '../assets/automação.png';
import Eosinnov from '../assets/eosinnov.png';
import Eosinnov2 from '../assets/eosinnov2.png';
import Cv from '../assets/cv.pdf';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';


function App() {
  const cards = [
    { imagem: Js, nome: 'Java Script', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Node, nome: 'NodeJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Html, nome: 'Html', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: React1, nome: 'ReactJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Sql, nome: 'MySQL', descricao: 'Linguagem de programação para o front-end e back-end.' }
  ];

  useEffect(() => {

    VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
  }, []);

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

        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
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
            <div className="foto" data-tilt data-tilt-max="3" data-tilt-speed="100" data-tilt-perspective="100">
              <img src={Eu} alt="Foto de Nicolas Voltareli" />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="sobre"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.83 }}
        >
          <div className="sobre">
            <h1>Sobre mim</h1>
            <p>
              Sou desenvolvedor Full Stack iniciante, com conhecimentos em JavaScript, Node.js, React.js e MySQL. Formado em Técnico em Desenvolvimento de Sistemas pelo Instituto Social Nossa Senhora de Fátima, estou em busca de oportunidades para aplicar minhas habilidades no desenvolvimento de aplicações completas, tanto no front-end quanto no back-end. Meu objetivo é continuar aprendendo e crescer profissionalmente, contribuindo para projetos desafiadores e de impacto.
            </p>
          </div>
        </motion.section>


        <motion.section
          id="habilidades"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="habilidades">
            <div className="titulo">
              <h1>Minhas habilidades</h1>
            </div>
            <div className="conetudo">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="card-container"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card imagem={card.imagem} nome={card.nome} descricao={card.descricao} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        <motion.section
          id="projetos"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="Projetos">
            <div className="titulo">
              <h1>Meus Projetos</h1>
              <div className="linha"></div>
            </div>
            <div className="meus-trabalhos">
              <Projetu
                imagem={Site}
                titulo="Doctor's Health"
                descricao="TCC"
                data="28 de Outubro de 2024"
              />

              <Projetu
                imagem={automacao}
                titulo="Software de Automação"
                descricao="Validação de cupom fiscal automatizado"
                data="06 de Janeiro de 2025"
              />

              <Projetu
                imagem={Eosinnov2}
                titulo="Eosinnov"
                descricao="Sistema de cadastro de funcionários"
                data="24 de Fevereiro de 2025"
              />

            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
