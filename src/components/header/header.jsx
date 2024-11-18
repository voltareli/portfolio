import './header.scss';
import linkedin from '../../assets/linkedin.png'
import git from '../../assets/github.png'
import menu from '../../assets/cardapio.png'


export default function header() {

    return (
        <div className='mae'>

            <div className='informacoes'>


                <div className='primeira'>
                <img src={menu} alt=""/>
                </div>

                <div className='segunda'>
                    <p>Portifólio</p>
                </div>

                <div className='terceira'>

                    <a href="https://www.linkedin.com/in/nicolas-voltareli-coelho-998989315?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtZf0ooAeQbuZC41Y77Wl7w%3D%3D">

                    <img src={linkedin} alt=""/>
                    </a>

                    <a href="https://github.com/voltareli">

                    <img className='git' src={git} alt="" />
                    </a>

                </div>



            </div>

           <div className='linha'></div>
        </div>
    )
};