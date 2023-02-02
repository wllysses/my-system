import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: var(--primary-color);
    padding: 2rem;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Title = styled.h2`
    color: var(--white);
`

export const LogoutButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--white);
    border-radius: 0.3rem;
    font-weight: 700;
`