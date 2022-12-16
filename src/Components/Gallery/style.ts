import styled from "styled-components";

export const BoxGallery = styled.main`
    padding-bottom: 6rem;
    display: flex;
    
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: center;
    margin-top: 9.4rem;
    z-index: 0;

    .contentPhoto{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 72px;
        letter-spacing: 0.12em;
        color: ${(props) => props.theme.colors.Rosa};
    }

    img {
        box-shadow: 5px 5px 8px black;
    }
`