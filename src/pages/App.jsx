import './App.scss';
import Eu from '../assets/foto.png'
import Header from '../components/header/header';
import Card from '../components/card-habilidade/card'
import Sql from '../assets/mysql.png'
import Js from '../assets/java.png'
import Html from '../assets/html.png'
import React1 from '../assets/react.png'
import Node from '../assets/node.png'
import Projetu from '../components/card-projeto/projeto'
import Site from '../assets/site.png'




function App() {

  const cards = [
    { imagem: Js, nome: 'Java Script', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Node, nome: 'NodeJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Html, nome: 'Html', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: React1, nome: 'ReactJs', descricao: 'Linguagem de programação para o front-end e back-end.' },
    { imagem: Sql, nome: 'MySQL', descricao: 'Linguagem de programação para o front-end e back-end.' }
];
  return (
    <div className="principal">
      <div className='fundo'>
        
        <Header />



        <div className='lang'>

          <div className='infos'>

            <h2 className='nom1'>Olá, Sou o <br /> <span className='nome'>Nicolas Voltareli</span></h2>
            <p>Seu desenvolver <strong>full-stack</strong></p>

            <div className='curriculo-contato'>

              <div className='botao1'>
                <a href='https://1drv.ms/b/s!ArgL7TJn49UT5g_GkrR2MeQkcPyR?e=byn6Gd' download className='botao-download'>

                <button className='curriculo'>Download CV</button>
                </a>
              </div>

              <div className='botao2'>
              <a href="mailto:nivoltareli@gmail.com">

                <button className=''>Entra em contato</button>
                </a>
              </div>
            </div>


          </div>

          <div className='foto'>

            <img src={Eu} alt="" />

          </div>

        </div>


        <div className='sobre'>

          <h1>Sobre mim</h1>
          <p>Sou desenvolvedor Full Stack iniciante, com conhecimentos em JavaScript, Node.js, React.js e MySQL. Formado em Técnico em Desenvolvimento de Sistemas pelo Instituto Social Nossa Senhora de Fátima, estou em busca de oportunidades para aplicar minhas habilidades no desenvolvimento de aplicações completas, tanto no front-end quanto no back-end. Meu objetivo é continuar aprendendo e crescer profissionalmente, contribuindo para projetos desafiadores e de impacto.</p>
        </div>

        <div className='habilidades'>

          <div className='titulo'>
            <h1>Minhas habilidades</h1>
          </div>

          <div className='conetudo'>
          {cards.map((card, index) => (
                <Card key={index} imagem={card.imagem} nome={card.nome} descricao={card.descricao} />
            ))}
          </div>

        </div>


        <div className='Projetos'>

          <div className='titulo'>
            <h1>Meus Projetos</h1>
          </div>
          <div className='meus-trabalhos'>
            
            <a href="http://4.172.207.208:3056/">     
          <Projetu 
                imagem={Site} 
                titulo="Doctor's Health" 
                descricao="Site de um Clinico geral." 
                data="28 de outubro de 2024" 
                
                />
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
