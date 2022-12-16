import styled from "styled-components";

export const Topo = styled.header`

    
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    z-index: 0;
    
    
    .boxHeader{
        display: flex;
        height: 2rem;
        padding: 2rem 0;
        justify-content: space-between;
        align-items: center;
        background: white;
        width: 100%;
        position: fixed;
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
            color: ${(props) => props.theme.colors.ColorLink};
        }
            
    }
    .menuHamburgger {
        position: absolute;
        right: 2.5rem;
        color: ${(props) => props.theme.colors.Rosa};
        width: 50px;
        height: 50px;
        cursor: pointer;
        visibility: hidden;
    }

    //////////////////////////////////////////////////////////////////////////////////////MENU-MODAL/
    .menu.active{
            opacity: 1;
            visibility: visible;
            width: 100%;
            height: 100%;
            background: ${(props) => props.theme.colors.Rosa};
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            transition: opacity 500ms ease-in;
            transition-duration: .5s;
        }
        
        
        
        
        
        .navModalPages {
            
            width: 40%;
            height: 80%;      
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            
            .closeModal {
                position: absolute;
                right: 2.5rem;
                top: 1.4rem;
                padding-bottom: 3rem;
                color: white;
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
            
            .contentLinkPages {
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                width: 50%;
                height: 2.8rem;
                border-radius: 0.6rem;
                color: ${(props) => props.theme.colors.branco};
                
                .linkPages {
                    color: ${(props) => props.theme.colors.Rosa};
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    text-decoration: none;
                    
                }
                
            }
        }
        
        .menu.inactive {
            display: none;
            
    }
    `






