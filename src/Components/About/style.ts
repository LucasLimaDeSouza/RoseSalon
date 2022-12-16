import styled from "styled-components";

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8rem 0;
    z-index: 0;
    
    .containerAbout{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        margin: 0 4rem;
    }

    .boxText{

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.12em;
        color: ${(props) => props.theme.colors.Rosa};
        padding-bottom: 5rem;
        border-bottom: dashed 1px ${(props) => props.theme.colors.Rosa};

        
    }

    .imgAbout {
        border: 11px dashed rgba(234, 76, 137, 50%);
        padding: 0.5rem;

    }

    .AboutimgCenter{
        
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10rem 0;
        
        .imgCenter{
            
            width: 90%;
            border-radius: 0.6rem;
            box-shadow: 5px 5px 8px black;
        }
    }

    
    

`



