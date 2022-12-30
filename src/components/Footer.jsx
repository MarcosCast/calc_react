import './Footer.css';

import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';

function Rodape() {
    return (
        <footer class="rodape">
        <p>Calculadora em React</p>
        <span>Desenvolvido por Marcos Castro</span>
        <div class="rodape-media">
          <a href="https://github.com/MarcosCast"><img src={Linkedin} alt="github"/></a>
        
          <a href="https://www.linkedin.com/in/marcos--castro/"><img src={Github} alt="linkedin"/></a>
        </div>
        </footer>        
    )    
}

export default Rodape;