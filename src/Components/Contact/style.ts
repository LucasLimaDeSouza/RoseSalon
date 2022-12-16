import styled from "styled-components";


export const BoxContact = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11.8rem;
    z-index: 0;
    
    ul{ 
        width: 42%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        
        .linkContact{
            
            display: flex;
            margin-bottom: 2.2rem;
            
            background: ${(props) => props.theme.colors.Rosa};
            width: 100%;
            height: 2.8rem;
            border-radius: 0.6rem;
            color: ${(props) => props.theme.colors.branco};
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
            
            .icon {
                position: absolute;
                padding-left: 1rem;
                z-index: 1;
                
            }
            label{ 
                
                padding: 0 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                letter-spacing: 0.12em;
                cursor: pointer;
                width: 100%;
                height: 100%;
                
            }
            label:hover{
                transition: all 0.8s;
                color: ${(props) => props.theme.colors.Rosa};
                background-color: ${(props) => props.theme.colors.branco};
                border: 1px solid ${(props) => props.theme.colors.Rosa};
                border-radius: 0.6rem;
            }
            
        }
    }

`