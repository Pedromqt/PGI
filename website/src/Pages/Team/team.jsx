import Navbar from "../../Components/Navbar/navbar"
import "../Team/team.css"

const Team = () =>{
    return(
        <>
            <Navbar/>
            <div className="teamContainer">
                <div className="text-title">Equipa:</div>
                <div className="text">João Vaz</div>
                <div className="text">Pedro Trindade</div>
                <div className="text">João Dias</div>
                <div className="text">Leonardo Silva</div>
            </div>
        </>
    )
}
export default Team;