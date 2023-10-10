import Topo from './components/Topo'
import Footer from './components/Footer'
import Corpo from './components/Corpo'
import {StyledApp} from './App.style'
import { useState } from 'react'

function App() {

  const [totalJogadas, setTotalJogadas] = useState(0)
  const [valorTotalApost, setValorTotalApost] = useState(0)
  const [valorTotalPago, setValorTotalPago] = useState(0)
  const [rol1Acionado, setRol1Acionado] = useState(false)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [apostaAtiva, setApostaAtiva] = useState(true)
  const [valorDisp, setValorDisp] = useState(100)
  const [valorAposta, setValorAposta] = useState(0)
  const [credito, setCredito] = useState(true)
  const [somRoleta, setSomRoleta] = useState(false)
  const [gambiarra, setGambiarra] = useState(false)


  return <StyledApp>

        <Topo />

        <Corpo rol1Acionado={rol1Acionado} setRol1Acionado={setRol1Acionado} number1={number1} setNumber1={setNumber1} number2={number2} setNumber2={setNumber2} number3={number3} setNumber3={setNumber3} valorDisp={valorDisp} setValorDisp={setValorDisp} valorAposta={valorAposta} setValorAposta={setValorAposta} credito={credito} setCredito={setCredito} apostaAtiva={apostaAtiva} setApostaAtiva={setApostaAtiva} somRoleta={somRoleta} setSomRoleta={setSomRoleta} gambiarra={gambiarra} setGambiarra={setGambiarra} valorTotalApost={valorTotalApost} setValorTotalApost={setValorTotalApost} valorTotalPago={valorTotalPago} setValorTotalPago={setValorTotalPago} totalJogadas={totalJogadas} setTotalJogadas={setTotalJogadas} />

        <Footer /> 

  </StyledApp>

}

export default App
