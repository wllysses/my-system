import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { GlobalContext } from '../../contexts/GlobalContext'
import { Button } from '../Button'
import { IUserProps } from '../../interfaces'
import loginImage from '../../assets/login.avif'
import { AlertMessage, ErrorMessage, Form, FormSide, Image, ImageSide, Input, InputGroup, Label, Title } from '../RegisterForm/styles'
import * as S from './styles'

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUserProps>()
    const { handleLogin } = useContext(GlobalContext)

    return (
        <S.LoginWrapper>
            <ToastContainer />
            <FormSide className='animate__animated animate__fadeInUp'>
                <Title>Bem-vindo</Title>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <InputGroup>
                        <Label>E-mail</Label>
                        <Input 
                            type="email"
                            placeholder='Digite seu e-mail'
                            { ...register('email', { required: true }) }
                        />
                        { errors.email && <ErrorMessage>Preencha o campo</ErrorMessage> }
                    </InputGroup>
                    <InputGroup>
                        <Label>Senha</Label>
                        <Input 
                            type="password"
                            placeholder='Digite sua senha'
                            { ...register('password', { required: true }) }
                        />
                        { errors.password && <ErrorMessage>Preencha o campo</ErrorMessage> }
                    </InputGroup>
                    
                    <Button label="Login" />
                </Form>
                <AlertMessage>
                    Não possui cadastro? <Link to="/register">Cadastre-se</Link>
                </AlertMessage>
            </FormSide>
            <ImageSide className='animate__animated animate__fadeInDown'>
                <Image src={loginImage} alt='Login Illustration' />
            </ImageSide>
        </S.LoginWrapper>
    )
}