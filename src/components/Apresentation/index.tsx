import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { Image } from '../RegisterForm/styles'
import welcomeIllustration from '../../assets/welcome.png'
import * as S from './styles'

export const Apresentation = () => {
    return (
        <S.Wrapper className='animate__animated animate__fadeInDown'>

            <S.BorderTop />

            <Image src={welcomeIllustration} alt="Illustration"/>
            <S.Title>
                Hello World
            </S.Title>
            <S.SubTitle>
                Seja bem-vindo(a) ao MySystem!
            </S.SubTitle>
            <span>Um sistema criado para fins educacionais.</span>
            <S.Actions>
                <Link to="/login">
                    <Button label='Login' />
                </Link>
                <Link to="/register">
                    <Button label='Registrar'/>
                </Link>
            </S.Actions>
        </S.Wrapper>
    )
}