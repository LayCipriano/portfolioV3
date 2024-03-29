import logoHome from '../assets/images/logoHome.png';
import { TypeName } from './TypeName.jsx';
import '../assets/css/HomeOne.css'

export const HomeOne = () => {
    return(
        <>
            <div className="content">
                <div className="imgLogo">
                    <img id='logoHome' src={logoHome} alt="imagem de computador com comandos de programação em tons de roxo"/>
                </div>
                <div className="contentEscrita">
                    <h1>Hey, eu sou a <span className='changePurple'>Lay</span>...</h1>
                    <h3><span className='typeName changePurple'>e por aqui você vai encontrar um pouco de </span> <TypeName /></h3>    
                </div>
            </div>
        </>
    )
} 