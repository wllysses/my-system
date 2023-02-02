import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import * as S from './styles'


export const Pagination = () => {

    const { handlePrevPage, handleNextPage, page } = useContext(GlobalContext)

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