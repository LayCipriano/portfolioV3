import '../assets/css/About.css'

export const About = () => {
    return (
        <>
            <div className="contentTwo">
                <div className="sobreMim defaultSection">
                    <h2 className='h2'>Sobre Mim</h2>
                    <p className='top'>Formada em Sistemas para Internet pela Unicesumar, onde iniciei minha carreira na área a pouco mais de 1 ano, me aventurando com a <span className='changePurple'>análise de requisitos</span>, definindo <span className='changePurple'>regras de negócio</span> e <span className='changePurple'>automatizando testes</span>.</p>
                </div>
                <div className="profissional defaultSection">
                    <p className='bottom'>Após quase 2 anos de atuação em uma das franquias da Happy, na cidade de Maringá, na área da gestão, comercial e administrativa, me foi dada a oportunidade de seguir na minha área de formação dentro do setor de TI da Sede da Happy Brasil, a Happy Tech. </p>
                    <p className='top'>Aqui, faço uso da minha experiência de negócio anterior para desenvolver novas soluções dentro do sistema próprio da empresa, aprimorando nosso ERP e CRM com as atualidades do mercado!</p>
                </div>
                <div className="habilidades defaultSection">
                    <p className='bottom'>Minhas habilidades vão de uma excelente compreensão e capacidade de adaptação ao meu ambiente e pessoas, para um bom conhecimento e entendimento das linguagens e frameworks utilizadas.</p>
                    <p className='top'>Paralelo à isso, desenvolvo minhas habilidades como frontend com alguns projetos apresentados aqui!</p>
                </div>
            </div>
        </>
    )
}