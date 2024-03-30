import '../assets/css/Projects.css'
import img from '../assets/images/projetoImagem.jpg'
import { motion } from 'framer-motion'
import {Carrossel } from './Carrossel.jsx'

export const Projects = () => {
    return(
        <>
            <div className="contentThree">
                <h2 className='h2 defaultSection titleSection'> Projetos Desenvolvidos </h2>
                    <Carrossel/>
            </div>
        </>
    )
}