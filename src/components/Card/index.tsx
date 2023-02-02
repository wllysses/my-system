import { ICardProps } from '../../interfaces'
import * as S from './styles'

export const Card = ({ firstName, lastName, email, picture }: ICardProps) => {
    return (
        <S.CardWrapper>
            <S.UserAvatar src={picture} alt={`Username : ${firstName} ${lastName}`}/>
            <S.Data>
                <S.UserFullName>{firstName} {lastName}</S.UserFullName>
                <S.UserEmail>{email}</S.UserEmail>
            </S.Data>
        </S.CardWrapper>
    )
}