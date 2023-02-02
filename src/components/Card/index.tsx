import * as S from './styles'

interface IProps {
    firstName: string
    lastName: string
    email: string
    picture: string
}

export const Card = ({ firstName, lastName, email, picture }: IProps) => {
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