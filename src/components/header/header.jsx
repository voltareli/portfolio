import './header.scss';
import linkedin from '../../assets/linkedin.png';
import git from '../../assets/github.png';
import menu from '../../assets/cardapio.png';
import { useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <div className='mae'>
      <div className='informacoes'>
        <div className='primeira'>
          <img src={menu} alt="" onClick={toggleMenu} />
        </div>

        <div className='segunda'>
          <p>Portifólio</p>
        </div>

        <div className='terceira'>
          <a href="https://www.linkedin.com/in/nicolas-voltareli-coelho-998989315">
            <img src={linkedin} alt="" />
          </a>

          <a href="https://github.com/voltareli">
            <img className='git' src={git} alt="" />
          </a>
        </div>
      </div>

      {menuVisible && (
        <div className='dropdownMenu'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </div>
      )}

      <div className='linha'></div>
    </div>
  );
}
