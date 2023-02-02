import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { IRandomUserProps } from '../../interfaces'
import { Card } from '../Card'
import * as S from './styles'


export const CardList = () => {

    const { randomUsers } = useContext(GlobalContext)

    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>
                    Lista de Usuários
                </S.Title>
                <S.List>
                    {
                       randomUsers.map((user: IRandomUserProps, index: number) => {
                        return (
                            <Card 
                                key={index}
                                firstName={user.name.first}
                                lastName={user.name.last}
                                email={user.email}
                                picture={user.picture.large}

                            />
                        )
                       }) 
                    }
                    
                </S.List>
            </S.Wrapper>
        </S.Container>
    )
}