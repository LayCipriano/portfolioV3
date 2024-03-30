import '../assets/css/Formulario.css'

export const Formulario = () => {
    return (
        <>
            <div className="bodyForm">
                <div className="contentForm">
                    <h3>Preencha o formulário ou, se preferir, encaminhe um e-mail diretamente para mim no <span className='changePurple'>webdevlay@gmail.com</span></h3>
                </div>

                <div className="input inputNome">
                    <input type="text" placeholder='Qual o seu nome?'/>
                </div>
                <div className="input inputEmail">
                    <input type="email" placeholder='Informe seu melhor e-mail...'/>
                </div>
                <div className="input inputMensagem">
                    <textarea cols="30" rows="10" placeholder='Digite aqui seu dúvida, sugestão, etc...'></textarea>
                </div>
                <input type="button" value="Enviar" />
            </div>
        </>
    )
}