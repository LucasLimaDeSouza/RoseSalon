import styled from "styled-components";

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8rem 0;
    
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
        color: #EA4C89;
        padding-bottom: 5rem;
        border-bottom: dashed 1px #EA4C89;

        
    }

    .imgAbout {
        border: 3px solid #1E1E1E;
    }

    .AboutimgCenter{
        
        padding: 10rem 0;
        
        .imgCenter{
            
            width: 100%;
            border-radius: 0.6rem;
            box-shadow: 5px 5px 8px black;
        }
    }

    
    

`



