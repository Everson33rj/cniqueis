/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import {StyledCorpo} from './Corpo.style'
import ambiente from '../assets/sounds/cassinoambiente.mp3'
import gameOver from '../assets/sounds/gameover.mp3'
import vitoriaRoleta from '../assets/sounds/ganhou.wav'
import derrotRoleta from '../assets/sounds/perdeu1.mp3'
import recebendoDinheiro from '../assets/sounds/recebendodinheiro.mp3'
import girando from '../assets/sounds/girando.mp3'
import pargandoCredito from '../assets/sounds/moedas1.wav'
import girandoAlavanca from '../assets/sounds/giroalavanca.mp3'
import pararRoleta from '../assets/sounds/pararroleta.wav'
import musicaMaquina from '../assets/sounds/musicamaquina2.wav'
import molduraRoleta from '../assets/images/moldura2.png'
import alavanca1 from '../assets/images/alavanca1.png'
import alavanca3 from '../assets/images/alavanca3.png'
import moedaPagar from '../assets/images/moeda1.gif'
import abadir from "../assets/images/abadireita.png"
import abaesq from "../assets/images/abaesquerda.png"
import imgApostaAba from "../assets/images/abavisor.png"
import comSom from "../assets/images/comsom.png"
import semSom from "../assets/images/semsom.png"
import abacima from "../assets/images/abacima.png"


function Corpo(props){

    const [alavImg, setAlavImg] = useState(alavanca1)
    const [btnComSom, setBtnComSom] = useState(false)

    //Funções que controlam os sons que não tem loop

    let pagandoCred = ()=>{
        let somCredit = new Audio(pargandoCredito)
        somCredit.volume = 1
        somCredit.play()
    }

    let girandoAlav = ()=>{
        let somGiroAlav = new Audio(girandoAlavanca)
        somGiroAlav.volume = 1
        somGiroAlav.play()
    }

    let parandoRoleta = ()=>{
        let paraRol = new Audio(pararRoleta)
        paraRol.volume = 1
        paraRol.play()
    }
    
    let gameOverGame = ()=>{
        let somGameOver = new Audio(gameOver)
        somGameOver.volume = 1
        somGameOver.play()
    }
    useEffect(()=>{

        if(props.valorAposta == 0 && props.valorDisp == 0){
            gameOverGame()
        }

    }, [props.valorAposta, props.valorDisp])

    let ganhouDinheiro = ()=>{
        let ganhouDin = new Audio(vitoriaRoleta)
        ganhouDin.volume = 1
        ganhouDin.play()
    }

    useEffect(()=>{

        let intervalo = setTimeout(()=>{
            if(props.number1 != 0 && props.number1 == props.number2 && props.number2 == props.number3){
                ganhouDinheiro()
            }

            
        }, 1000)

        return ()=>{clearTimeout(intervalo)}
    })

    let perdeuDinheiro = ()=>{
        let perdeuDin = new Audio(derrotRoleta)
        perdeuDin.volume = 1
        perdeuDin.play()
    }

    useEffect(()=>{
        let intervalo = setTimeout(()=>{
                    if(props.number1 != 0 && props.number1 != props.number2 || props.number2 != props.  number3){
                    perdeuDinheiro()
                    }
            }, 1000)

            return ()=>{clearTimeout(intervalo)}
    })

    let recebendoDinDin = ()=>{
        let rebebendoDin = new Audio(recebendoDinheiro)
        rebebendoDin.volume = 1
        rebebendoDin.play()
    }

    const refSomGiro = useRef()

    useEffect(()=>{
        if(props.somRoleta == true){
            refSomGiro.current.loop = true
            refSomGiro.current.volume = .5
            refSomGiro.current.play()
            
        }else{
            refSomGiro.current.pause()
        }
    },[props.somRoleta])

    //Funções que controlam os números
    //Cada função é chamada com uma aleatoriedade, quando o botão é clicado. Cada retângulo que contém os números que giram, podem chamar qualquer função dessas para mostrar um número qualquer de 1 a 3.

    let rol1 = () => {
        if(props.number1 == 0){

            return <div className="boxnumeros0">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

        }else{
            if(props.number1 == 0 && props.valorAposta != 0){
                return <div className="boxnumeros">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number1 == 1){
                return <div className="boxnumeros1">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number1 == 2){
                return <div className="boxnumeros2">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number1 == 3){
                return <div className="boxnumeros3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }
        }
    }

    let rol2 = () => {
        if(props.number1 == 0){
            
            return <div className="boxnumeros0">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>

        }else{
            if(props.number2 == 0 && props.valorAposta != 0){
                return <div className="boxnumeros">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number2 == 1){
                return <div className="boxnumeros1">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number2 == 2){
                return <div className="boxnumeros2">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number2 == 3){
                return <div className="boxnumeros3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }
        }
    }

    let rol3 = () => {
        if(props.number1 == 0){

            return <div className="boxnumeros0">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

        }else{
            if(props.number3 == 0 && props.valorAposta != 0){
                return <div className="boxnumeros">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number3 == 1){
                return <div className="boxnumeros1">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number3 == 2){
                return <div className="boxnumeros2">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }else if(props.number3 == 3){
                return <div className="boxnumeros3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            }
        }
    }
    
    //Função que controla a aleatoriedade de cada quadro de números rotatórios.

    let sorteio = ()=>{

        if(props.number1 == 0){
            
            props.setNumber1(1 + Math.floor(Math.random() * 3))
            
            setTimeout(()=>{
                
                props.setNumber2(1 + Math.floor(Math.random() * 3))
                
            },300)
            
            setTimeout(()=>{
                
                props.setNumber3(1 + Math.floor(Math.random() * 3))
                
            },500)

        }
        
    }

    //Função com a gambiarra que aplica apenas uma aleatoriedade nos três quadros. Isso faz com que os números continuem aleatótios, mas os três quadros apresentem o mesmo número. Então, cada vez que girar, aparecerá um número de 1 a 3, mas será o mesmo nos três quadros.

    let sorteio2 = ()=>{

        let randomicoOriginal = 1 + Math.floor(Math.random() * 3)

        if(props.number1 == 0){
            
            props.setNumber1(randomicoOriginal)
            
            setTimeout(()=>{
                
                props.setNumber2(randomicoOriginal)
                
            },300)
            
            setTimeout(()=>{
                
                props.setNumber3(randomicoOriginal)
                
            },500)

        }
        
    }

    //Função que pega o valor inicial disponível para apostas.

    let valorDisp = () => {

        let valor = props.valorDisp   
        
        return `R$${valor},00`
    }

    //Função que controla se a aposta está ativa ou não

    useEffect(()=>{
        if(props.number1 == props.number2 && props.number2 == props.number3 && props.number1 != 0){
            props.setValorDisp(props.valorDisp + props.valorAposta*2)
            recebendoDinDin()
            props.setApostaAtiva(true)

        }

        if(props.number1 != props.number2 || props.number2 != props.number3 || props.number1 != 0){
            setTimeout(()=>{
                props.setApostaAtiva(true)
                props.setValorAposta(0)
                props.setNumber1(0)
                props.setNumber2(0)
                props.setNumber3(0)
            }, 3000)
        }

        
    },[props.number1, props.number2, props.number3])

    //Funções que controlam a música ambiente e a música da máquina.

    const musicaAmbiente = useRef()

    useEffect(()=>{

        if(btnComSom == true){
            musicaAmbiente.current.loop = true
            musicaAmbiente.current.volume=1
            musicaAmbiente.current.play()
        }else{
            musicaAmbiente.current.pause()
        }
        
    },[btnComSom])

    const musicaMaquinaBack = useRef()
    
    useEffect(()=>{
        if(btnComSom == true){
            musicaMaquinaBack.current.volume = 1
            musicaMaquinaBack.current.loop = true
            musicaMaquinaBack.current.play()
        }else{
            musicaMaquinaBack.current.pause()
        }
    },[btnComSom])

    //Função que controla o clique co botão do scroll do mouse. Ela identifica a numeração do botão clicado e aplica true na propriedade Gambiarra que está no App.js. ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(()=>{

        document.addEventListener("mousedown", (event)=>{
        
            if(event.button == 1){
                props.setGambiarra(true)
            }else{
                setTimeout(()=>{
                    props.setGambiarra(false)
                },3000)
            }
    
        })

    },[props.gambiarra])

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Retorno do corpo

    return <StyledCorpo gambiarra={props.gambiarra} valorDisp={props.valorDisp} number1={props.number1} valorAposta={props.valorAposta} credito={props.credito} apostaAtiva={props.apostaAtiva} alavImg={alavImg} alavanca1={alavanca1} >

        <img src={abacima} className='abadecima' />

        <audio src={ambiente} ref={musicaAmbiente} ></audio>
        <audio src={musicaMaquina} ref={musicaMaquinaBack}></audio>
        <div className="boxgeral">

                <div className="moeda">
                    <img src={moedaPagar}   onClick={()=>{
                        
                        if(props.apostaAtiva == true && props.valorDisp > 0){
                            props.setValorDisp(props.valorDisp - 10)
                            props.setValorAposta(props.valorAposta + 10)
                            props.setSomRoleta(true)
                            pagandoCred()
                        }
                        
                    }} className='imagempagar' />

                </div>
                <div className="valorapos">
                <div className="vdisp">

                    <img src={imgApostaAba} alt="" className="vaposta2" />

                    <input type="button" value={valorDisp()} className='btnpagar' />
                    
                </div>
                <div className="vaposta" onClick={()=>{
                    
                    props.valorAposta <= 10 ? props.setSomRoleta(false) : ""

                        if(props.apostaAtiva == true && props.valorAposta > 0){
                            props.setValorAposta(props.valorAposta - 10)
                            props.setValorDisp(props.valorDisp + 10)
                            pagandoCred()
                            
                        }

                }} >

                    <img src={imgApostaAba} className="vaposta" />
                <input type='button' value={`R$${props.valorAposta},00`} className="valoraposta"  />
                </div>
                </div>
            
            
            <audio src={girando} ref={refSomGiro} ></audio>
            <div className="lateralesquerda">
                <div className="pixel"></div>
                <img src={abaesq} className='abadireitacls'/>

            </div>
            <div className="box1">
                <img src={molduraRoleta} alt="Moldura Roleta" className="mold" />
                {rol1()}
            </div>
            
            <div className="box1 boxmeio">
                <img src={molduraRoleta} alt="Moldura Roleta" className="mold" />
                {rol2()}
            </div>
            <div className="box1">
                <img src={molduraRoleta} alt="Moldura Roleta" className="mold" />
                {rol3()}
            </div>

            <div className="boxalavanca">
                <img src={abadir} className='abaesquerdacls' />
                <img src={btnComSom == true ? comSom : semSom} alt="Botão de áudio" className='btncomsemsom' onClick={()=>{
                    btnComSom == true ? setBtnComSom(false) : setBtnComSom(true)
                }} />

                {/* Botão que controla a alavanca e aplica uma condição que identifica se a gambiarra está ativa ou não */}
            
                <input type="button" value="" className='btnparar' onClick={()=>{
                    
                    if(props.valorAposta != 0){

                        props.setSomRoleta(false)
                        props.setApostaAtiva(false)
                        props.gambiarra == true ?
                        (
                            sorteio2()
                        )                        
                        : 
                        (
                            sorteio()
                        )
                        girandoAlav()
                        setAlavImg(alavanca3)
                        setTimeout(()=>{
                            setAlavImg(alavanca1)
                        },300)
         
                        props.setTotalJogadas(props.totalJogadas + 1)
                        

                    }else{

                        parandoRoleta()
                    }

                }}
                 />
                    <img src={alavImg} alt="Alavanca" className='alavancaimagem' />
            </div>
        </div>

    </StyledCorpo>
}

export default Corpo