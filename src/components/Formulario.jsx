import { useState } from 'react'
import { send } from '@emailjs/browser'
import '../assets/css/Formulario.css'

export const Formulario = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if(name === "" || email === "" || message === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const tempParams = {
            from_name: name,
            email: email,
            message: message
        }

        send("service_cnixibd", "template_kav1hun", tempParams, "7PqexETqHluiY0MyT")
        .then((response) => {
            alert("Mensagem enviada com sucesso! Obrigada.")
            // console.log("EMAIL ENVIADO", response.status, response.text)
            setName("")
            setEmail("")
            setMessage("")
        }, (err) => {
            // console.log("ERRO: ", err)
        })
    }

    return (
        <>
            <div className="bodyForm defaultSection">
                <form className="form" onSubmit={sendEmail}>
                    <div className="contentForm">
                        <h3>Preencha o formulário ou, se preferir, encaminhe um e-mail diretamente para mim no <span className='changePurple email'><a href="mailto:webdevlay@gmail.com">webdevlay@gmail.com</a></span></h3>
                    </div>

                    <div className="input inputNome">
                        <input 
                            type="text" 
                            placeholder='Qual o seu nome?' 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="input inputEmail">
                        <input 
                            type="email" 
                            placeholder='Informe seu melhor e-mail...' 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="input inputMensagem">
                        <textarea 
                            placeholder='Digite aqui seu dúvida, sugestão, etc...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>

                    <input 
                        className='btnEnviar' 
                        type="submit" 
                        value="Enviar" 
                    />
                </form>
            </div>
        </>
    )
}