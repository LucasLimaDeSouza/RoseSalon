import styled from "styled-components";


export const Topo = styled.header`

display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;


.boxHeader{
    display: flex;
    height: 2rem;
    padding: 2rem 0;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    background: white;
    width: 100%;
    top: -1px;
    
}


.logoImage {
    margin-right: 6.1rem;
}

ul {
    
    display: flex;
    gap: 6.5rem;
    
    .linkPages{
        list-style: none;
        align-items: center;
        
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.12em;
        text-decoration: none;
        color: #1E1E1E;
    }
        
    }
    
    `