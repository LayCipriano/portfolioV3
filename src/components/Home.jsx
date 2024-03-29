import { Cabecalho } from "./HomeCabecalho.jsx"
import { HomeOne } from "./HomeOne.jsx"
import { HomeTwo } from "./HomeTwo.jsx"
// import { HomeThree } from "./HomeThree.jsx"
// import { HomeFour } from "./HomeFour.jsx"


export const Home = () => {
    return (
        <main>
            <Cabecalho />
            <HomeOne/>
            <HomeTwo/>
            {/* <HomeThree/> */}
            {/* <HomeFour/> */}
        </main>
    )
}