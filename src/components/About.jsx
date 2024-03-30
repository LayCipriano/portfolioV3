import '../assets/css/About.css'

export const About = () => {
    return (
        <>
            <div className="contentTwo">
                <div className="sobreMim defaultSection">
                    <h2 className='h2'>Sobre Mim</h2>
                    <p className='bottom'>Formada em Sistemas para Internet pela Unicesumar, onde iniciei minha carreira na área a pouco mais de 1 ano, me aventurando com a <span className='changePurple'>análise de requisitos</span>, definindo <span className='changePurple'>regras de negócio</span> e <span className='changePurple'>automatizando testes</span>.</p>
                    <p className='top'>Paralelo à isso, desenvolvo minhas habilidades como frontend com alguns projetos apresentados aqui!</p>
                </div>
                <div className="profissional defaultSection">
                    <h2 className='h2'>Profissional</h2>
                    <p className='bottom'>Após quase 2 anos de atuação em uma das franquias da Happy, na cidade de Maringá, sempre na área da gestão, comercial e administrativa, me foi dada a oportunidade de seguir na minha área de formação dentro do setor de TI da Sede da Happy Brasil, a Happy Tech. </p>
                    <p className='top'>Aqui, junto minha experiência de negócio anterior para desenvolver novas soluções dentro do sistema próprio da empresa, aprimorando nosso ERP e CRM com as atualidades do mercado, bem como melhorando nossas ferramentas de treinamento. Vamos para quase 3 anos nessa parceria!</p>
                </div>
                <div className="habilidades defaultSection">
                    <h2 className='h2'>Habilidades</h2>
                    <p className='bottom'>Minhas habilidades vão de uma excelente compreensão e capacidade de adaptação ao meu ambiente e pessoas, para um bom conhecimento das linguagens e frameworks utilizadas.</p>
                    <p className='top'>Hoje fazemos uso de React para nosso frontend e Java Spring Boot para nosso backend e posso dizer que, junto da minha equipe atual, pude aprimorar muito meu conhecimento nessa área.</p>
                </div>
            </div>
        </>
    )
}