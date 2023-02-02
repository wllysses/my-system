import * as S from './styles'

interface IButtonProps {
    label: string
}

export const Button = ({ label }: IButtonProps) => {
    return (
        <S.Button>{label}</S.Button>
    )
}