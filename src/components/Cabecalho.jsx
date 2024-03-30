import '../assets/css/Cabecalho.css';

export const Cabecalho = () => {
    return (
        <>
            <header>
                <div className="logotipo">
                    <p className='titleLogo'>Lay Cipriano</p>
                </div>
                <nav>
                    <div className="links">
                        <a href="#home" id='home'>HOME</a>
                        <a href="#sobre" id='sobre'>SOBRE MIM</a>
                        {/* <a href="#habilidades" id='habilidades'>HABILIDADES</a> */}
                        <a href="#projetos" id='projetos'>PROJETOS</a>
                        <a href="#contato" id='contato'>CONTATO</a>
                    </div>
                </nav>
            </header>
        </>
    )
}