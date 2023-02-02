import styled from "styled-components";

export const RegisterWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageSide = styled.div`
    height: 100%;
    width: 50%;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: center;

    @media(max-width: 900px) {
        display: none;
    }
`

export const FormSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    @media(max-width: 900px) {
        width: 90%;
    }
`

export const Image = styled.img`
    max-width: 50%;
    border-radius: 50%;
`

export const Title = styled.h3`
    font-size: 3rem;
`

export const Form = styled.form`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const CheckGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    label {
        font-weight: 400;
    }
`

export const Label = styled.label`
    font-weight: 700;
`

export const Input = styled.input`
    padding: 0.75rem;
    border-radius: 0.3rem;
    border: 1px solid rgba(0, 0, 0, .150);
    outline: none;
`

export const AlertMessage = styled.span`
    text-align: center;
    margin-top: 1rem;

    a {
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const ErrorMessage = styled.span`
    color: red;
    font-style: italic;
    margin-top: 0.25rem;
`