import './home.css';
import Buttons from '../button/button';
import imgs from '../props/img/KikerLogo.png'
import { BsMouse } from 'react-icons/bs';

function Home() {
    return (
        <div id='home' className="container home-container">
            <div className="Logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <img src={imgs} alt="" />
            </div>
            <a href="#footer" className='scroll-down'>
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>
            <h2>
                <span>about Me</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Corrupti iure qui placeat
                    ut eligendi ducimus id repellendus dolore
                    labore fuga suscipit alias,
                    amet natus tenetur ab architecto
                    necessitatibus vero similique.
                </p>
            </h2>

            <Buttons />
        </div>
    )
}

const toggle = document.querySelector('.main-img');
if (toggle) {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        console.log('simona si llega')
    })
}

export default Home;