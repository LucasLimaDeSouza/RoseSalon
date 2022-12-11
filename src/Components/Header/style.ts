import styled from "styled-components";

export const Topo = styled.header`

@import '../../src/style/index';
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
width: 100%;


.boxHeader{
    display: flex;
    height: 2rem;
    padding: 2rem 0;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: white;
    width: 100%;
    top: -1px;
    
}


.logoImage {
    margin-left: 4rem;
}

.navPages {
    
    display: flex;
    gap: 4.5rem;
    margin-right: 6.5rem;
    
    
    .linkPages{
        list-style: none;
        align-items: center;
        
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.12em;
        text-decoration: none;
        color: #1E1E1E;
    }
        
}
.menuHamburgger {
    position: absolute;
    color: #EA4C89;
    width: 50px;
    height: 50px;
    right: 2.5rem;
    cursor: pointer;
    visibility: hidden;
}

    
    `