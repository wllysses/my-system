import styled from 'styled-components'

export const PaginationWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
`

export const CurrentPage = styled.span`
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, .200);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .150);
`

export const PrevButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;
    border: 1px solid rgba(0, 0, 0, .200);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .150);
`

export const NextButton = styled.button`
    padding: 0.5rem;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 1px solid rgba(0, 0, 0, .200);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .150);
`