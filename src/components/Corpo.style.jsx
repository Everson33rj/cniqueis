import styled from "styled-components";

export const StyledCorpo = styled.div`

    width: 70vw;
    height: 80vh;

    
    .btnbox{
        display: flex;
        align-items: center;
        width: 90vw;
        height: 50px;
        transition: 1000ms;
        position: relative;
    }

.abadecima{
    position: absolute;
    top: 0;
    width: 70vw;
    height: 2vw;
}

.abadireitacls{
    height: 100vw;
    width: 30px;
    position: absolute;
    right: 0;
    
}

.abaesquerdacls{
    height: 100vw;
    width: 30px;
    position: absolute;
    left: 0;
}

.boxgeral{
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    justify-content: center;

}

.mold{
    z-index: 1;
    width: 100%;
}

.box1{
    width: 15vw;
    height: 22.5vw;
    background-color: rgb(255, 255, 255);
    box-shadow: inset 2px 2px 10px 5px rgba(0, 0, 0, 0.438);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.lateralesquerda{
    width: 15vw;
    height: 100vw;
    box-shadow: inset 2px 2px 10px 5px rgba(0, 0, 0, 0.438);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
}

.pixel{
    width: 1px;
    height: 1px;
    background-color: ${props => props.gambiarra == true ? "yellow" : ""};
}

.boxalavanca{
    width: 15vw;
    height: 100vh;
    box-shadow: inset 2px 2px 10px 5px rgba(0, 0, 0, 0.438);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 7;
}

.btncomsemsom{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 2vw;
    right: 2vw;
    cursor: pointer;
    z-index: 7;
}

.moeda{
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    position: absolute;
    top: 10.5%;
    left: 73.2%;
    width: 100px;  
}

.imagempagar{
    cursor: pointer;
}

.btnpagar{
    background-color: unset;
    color: ${props => props.valorAposta != 0 ? "#000000" : "#000000"};
    background-color: #557f28;
    border-radius: 3px;
    cursor: default;
    border: solid black 10px;
    width: 12vw;
    height: 12vh;
    font-family: 'VT323', monospace;
    font-size: 2vw;
}

.vaposta{
    position: relative;
    width: 12vw;
    height: 12vh;
    cursor: pointer;
}

.valorapos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8vh;
    left: 53%;
    z-index: 7;
}

.vaposta2{
    position: absolute;
    width: 12vw;
    height: 12vh;
}

.vdisp{
    margin-bottom: 10px;
}

.valoraposta{
    cursor: pointer;
    color: ${props => props.valorAposta != 0 ? "#000000" : "#557f28"};
    background-color: #557f28;
    border: none;
    border-radius: 3px;
    cursor: pointer; 
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    font-size: 2vw;
    top: 0;
    border: solid black 10px;
    width: 12vw;
    height: 12vh;
    font-family: 'VT323', monospace;
    z-index: -1;
}

.btnparar{

    background-color: unset;
    color: #bdbdbd;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    position: absolute;
    top: 7.5%;
    left: 10%;
    font-size: 15pt;
    font-weight: bold;
    text-transform: uppercase;
    display: ${props => props.alavImg == props.alavanca1 ? "unset" : "none"};
    z-index: 6;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.btnparar:hover{
    background-color: #a303033e;
}


.alavancaimagem{
    position: absolute;
    top: 0;
    left: -.5vw;
    z-index: 1;
}

.boxmeio{
    margin: 1vw;
}

.boxnumeros0{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(240, 255, 240, 0);
    font-size: 18vw;
    animation: anim linear .2s infinite running;
    align-items: center;
    top: -128%;
    font-weight: bold;
}

.boxnumeros{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(240, 255, 240, 0);
    font-size: 18vw;
    animation: anim linear .1s infinite running;
    align-items: center;
    top: -128%;
    font-weight: bold;
}

@keyframes anim {
    from {
        
    }
    
    to{
        top: 8%;
    }
}

.boxnumeros1{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(240, 255, 240, 0);
    font-size: 18vw;
    animation: anim1 .2s ease-in-out;
    animation-fill-mode: both;
    align-items: center;
    top: -75%;
    font-weight: bold;
}

@keyframes anim1 {

    50%{
        top: 40%;
    }

    85%{
        top: 0%;
    }
    
    100%{
        top: 5%
    }
}

.boxnumeros2{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(240, 255, 240, 0);
    font-size: 18vw;
    animation: anim2 1s ease-in-out;
    animation-fill-mode: both;
    align-items: center;
    top: -75%;
    font-weight: bold;
}

@keyframes anim2 {

    50%{
        top: 40%;
    }

    85%{
        top: 0%;
    }
    
    100%{
        top: -88%
    }
    
}

.boxnumeros3{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(240, 255, 240, 0);
    font-size: 18vw;
    animation: anim3 1s ease-in-out;
    animation-fill-mode: both;
    align-items: center;
    top: -75%;
    font-weight: bold;
}

@keyframes anim3 {

    50%{
        top: 40%;
    }

    85%{
        top: 0%;
    }
    
    100%{
        top: -180%
    }
}


`