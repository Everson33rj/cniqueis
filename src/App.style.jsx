import styled from 'styled-components'

import imgBack from "./assets/images/back2.jpg"

export const StyledApp = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70vw;
        height: 100vh;
        background-image: url(${imgBack});
        background-size: cover;
        z-index: -1;
`
