import { Link } from 'react-router-dom'
import * as S from './styles'

export const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.Header>
                <S.Title>
                    MySystem
                </S.Title>
                <Link to="/login">
                    <S.LogoutButton>Sair</S.LogoutButton>
                </Link>
            </S.Header>
        </S.HeaderWrapper>
    )
}