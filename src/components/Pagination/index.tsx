import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import * as S from './styles'

interface IPaginationProps {
    handlePrevPage: () => void
    handleNextPage: () => void
    page: number
}

export const Pagination = () => {

    const { handlePrevPage, handleNextPage, page } = useContext<IPaginationProps>(GlobalContext)

    return (
        <S.PaginationWrapper>
            <S.PrevButton onClick={handlePrevPage}>
                Anterior
            </S.PrevButton>
            <S.CurrentPage>{page}</S.CurrentPage>
            <S.NextButton onClick={handleNextPage}>
                Próxima
            </S.NextButton>
        </S.PaginationWrapper>
    )
}