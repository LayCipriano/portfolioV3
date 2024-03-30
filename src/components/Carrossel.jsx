import easyMessage from '../assets/images/easyMessage.png'
import buscadorCep from '../assets/images/buscadorCep.png'
import comingSoon from '../assets/images/comingSoon.jpg'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import '../assets/css/Carrossel.css'
import '../assets/css/Projects.css'

const cards = [{
    nome: "Easy Message",
    image: easyMessage,
    descricao: "Envie grandes textos com facilidade pelo WhatsApp, aplique formatações e muito mais. E o melhor? Sem custo algum!",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://laycipriano.github.io/easyMessage/",
    linkRepo: "https://github.com/LayCipriano/easyMessage"
},
{
    nome: "Buscador de CEP",
    image: buscadorCep,
    descricao: "Buscador de CEP gratuito, consumindo uma API da viacep.com.br",
    botaoProjeto: "Acessar Aplicação",
    botaoGithub: "Acessar Repositório",
    linkProjeto: "https://umtestedalay.000webhostapp.com/",
    linkRepo: "https://github.com/LayCipriano/buscadorCEP"
},
{
    nome: "Em Breve",
    image: comingSoon,
    descricao: "Novos projetos chegando em breve :)",
    botaoProjeto: "Em Breve",
    botaoGithub: "Em Breve",
    linkProjeto: "",
    linkRepo: ""
}
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