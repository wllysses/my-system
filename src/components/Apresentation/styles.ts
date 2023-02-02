import styled from "styled-components";

export const BorderTop = styled.span`
    position: absolute;
    top: 0;
    background-color: var(--primary-color);
    width: 100%;
    height: 0.5rem;
`

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    img {
        max-width: 400px;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
`

export const SubTitle = styled.h4`
    font-size: 1.5rem;
    text-align: center;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
`