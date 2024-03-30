import { Cabecalho } from "./Cabecalho.jsx"
import { HomeOne } from "./HomeOne.jsx"
import { About } from "./About.jsx"
import { Projects } from "./Projects.jsx"
import { Contact } from "./Contact.jsx"

export const Home = () => {
    return (
        <main>
            <Cabecalho />
            <HomeOne/>
            <About/>
            <Projects/>
            <Contact/>
        </main>
    )
}