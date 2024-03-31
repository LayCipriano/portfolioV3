import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import email from '../assets/images/email.png'

import { Formulario } from '../components/Formulario.jsx'
import '../assets/css/Contact.css'

export const Contact = () => {
    return (
        <>
            <div className="contentFour">
                <div className="informacoes">
                    <div className="section defaultSection">
                        <h2 className='h2'>Contato</h2>

                        <div className="infoSection">
                            <p>Você pode me acompanhar em alguma das redes abaixo:</p>
                        </div>
                    </div>

                    <div className="iconSocial defaultSection">
                        <a href="https://github.com/LayCipriano" target='_blank'>
                            <img className='icon' src={github} alt="Ícone para acesso ao GitHub" />
                        </a>

                        <a href="https://www.linkedin.com/in/lay-cipriano/" target='_blank'>
                            <img className='icon' src={linkedin} alt="Ícone para acesso ao LinkedIn" />
                        </a>

                        <a href="mailto:webdevlay@gmail.com">
                            <img className='icon' src={email} alt="Ícone para envio de e-mail" />
                        </a>
                    </div>
                </div>
                <Formulario />
            </div>
        </>
    )
}