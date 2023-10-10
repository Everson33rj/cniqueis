import { StyledTopo } from "./Topo.style"
import imgLogo2 from "../assets/images/logo.png"
import slotMoedas from "../assets/images/coins2.png"


function Topo(){
    return <StyledTopo>
        <div className="topogeral">

            <a className="logo"><img src={imgLogo2} alt="Logotipo" className="imglogocls" /></a>

            <div className="slotcoins">
                <img src={slotMoedas} alt="" />
            </div>

        </div>
    </StyledTopo>
}

export default Topo