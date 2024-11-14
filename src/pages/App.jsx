import './App.scss';
import Eu from '../assets/foto.png'
import Header from '../components/header/header';


function App() {
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

        </div>
      </div>
    </div>
  );
}

export default App;
