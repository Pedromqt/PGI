import Navbar from "../../Components/Navbar/navbar"
import "../About/about.css"
const About = () => {
    return (
        <>
            <Navbar />
            <div className="aboutContainer">
                <div className="title-text">Aviso legal: </div>
                <div className="middle-text">Os conteúdos constantes deste website foram
                    realizados por alunos no âmbito de uma disciplina – Processos de
                    Gestão e Inovação - do 3º ano da licenciatura em Engenharia
                    Informática da Faculdade de Ciências e Tecnologia da
                    Universidade de Coimbra (FCTUC), pelo que a FCTUC não se
                    responsabiliza pelo seu conteúdo.  </div>
            </div>
        </>
    )

}

export default About