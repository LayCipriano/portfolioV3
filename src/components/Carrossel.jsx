import easyMessage from '../assets/images/easyMessage.png'
import buscadorCep from '../assets/images/buscadorCep.png'
import toDoList from '../assets/images/toDoList.png'
import portfolio from '../assets/images/portfolio.png'
import comingSoon from '../assets/images/comingSoon.jpg'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import '../assets/css/Carrossel.css'
import '../assets/css/Projects.css'

const cards = [{
    nome: "Easy Message",
    image: easyMessage,
    descricao: "Essa foi a primeira aplicação desenvolvida, com HTML, CSS e JS para o envio do WhatsApp. Por ela você consegue enviar grandes textos com facilidade pelo WhatsApp, aplicar formatações iguais do WhatsApp e muito mais.",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://easymessage.laycipriano.com.br/",
    linkRepo: "https://github.com/LayCipriano/easyMessage"
},
{
    nome: "To Do List",
    image: toDoList,
    descricao: "Primeiro projeto desenvolvido utilizando ReactJs e alguns conceitos de useState. O mesmo armazena os dados no LocalStorage do navegador, permitindo posteriro acesso pelo usuário.",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://todolist.laycipriano.com.br/",
    linkRepo: "https://github.com/LayCipriano/toDoList"
},
{
    nome: "Buscador de CEP",
    image: buscadorCep,
    descricao: "Projeto de um buscador de CEP gratuito, consumindo uma API da viacep.com.br para localizar o endereço. Reconhece rua/avenida, bairro, cidade/UF e complemento (se possuir).",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://buscadorcep.laycipriano.com.br/",
    linkRepo: "https://github.com/LayCipriano/buscadorCEP"
},
{
    nome: "Meu Portfólio",
    image: portfolio,
    descricao: "Meu próprio portfólio é meu último projeto desenvolvido com ReactJs. Anteriormente produzido com uso de HTML, CSS, JS e PHP, esta nova versão se encontra aprimorada com meus últimos conhecimentos da famosa biblioteca e novos pacotes descobertos.",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://laycipriano.com.br/",
    linkRepo: "https://github.com/LayCipriano/portfolioV3"
}
// {
//     nome: "Em Breve",
//     image: comingSoon,
//     descricao: "Novos projetos chegando em breve :)",
//     botaoProjeto: "Em Breve",
//     botaoGithub: "Em Breve",
//     linkProjeto: "",
//     linkRepo: ""
// }
]

export const Carrossel = () => {

    const projetos = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(projetos.current?.scrollWidth - projetos.current?.offsetWidth)
    }, []);

    return (
        <>
            <motion.div ref={projetos} className="projetos" whileTap={{ cursor: "grabbing" }} key={cards}>
                <motion.div className='cardProjeto' drag='x' dragConstraints={{ right: 0, left: -width }}>

                    {cards.map(cards => (
                        <>
                            <motion.div className='inner'>
                                <img src={cards.image} alt="Imagem do projeto Easy Message" />
                                <h3>{cards.nome}</h3>
                                <span className='descProjeto'>{cards.descricao}</span>

                                <div className="btn">
                                    <a href={cards.linkProjeto} target='_blank'>
                                        <button className='acessarProjeto'>{cards.botaoProjeto}</button>
                                    </a>
                                    <a href={cards.linkRepo} target='_blank'>
                                        <button className='acessarProjeto'>{cards.botaoGithub}</button>
                                    </a>
                                </div>
                            </motion.div>
                        </>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}