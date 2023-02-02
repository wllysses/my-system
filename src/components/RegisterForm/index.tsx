import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { GlobalContext } from '../../contexts/GlobalContext';
import { IUserProps } from '../../interfaces';
import { Button } from '../Button'
import registerImage from '../../assets/register.webp'
import 'react-toastify/dist/ReactToastify.css';
import * as S from './styles'


export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUserProps>()
    const { handleRegister } = useContext(GlobalContext)

    return (
        <S.RegisterWrapper>
            <ToastContainer />
            <S.ImageSide className='animate__animated animate__fadeInLeft'>
                <S.Image src={registerImage} alt="Register Illustration" />
            </S.ImageSide>
            <S.FormSide className='animate__animated animate__fadeInRight'>
                <S.Title>Cadastre-se</S.Title>

                <S.Form onSubmit={handleSubmit(handleRegister)}>
                    <S.InputGroup>
                        <S.Label>Nome</S.Label>
                        <S.Input 
                            type="text"
                            placeholder='Nome completo'
                            { ...register('name', { required: true }) }
                        />
                        { errors.name && <S.ErrorMessage>Preencha o campo corretamente.</S.ErrorMessage> }
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>E-mail</S.Label>
                        <S.Input 
                            type="email"
                            placeholder='E-mail'
                            { ...register('email', { required: true }) }
                        />
                        { errors.email && <S.ErrorMessage>Preencha o campo corretamente.</S.ErrorMessage> }
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>Senha</S.Label>
                        <S.Input 
                            type="password"
                            placeholder='Senha'
                            { ...register('password', { required: true }) }
                        />
                        { errors.name && <S.ErrorMessage>Preencha o campo corretamente.</S.ErrorMessage> }
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>Telefone</S.Label>
                        <S.Input 
                            type="tel"
                            placeholder='Telefone'
                            { ...register('tel', { required: true }) }
                        />
                        { errors.name && <S.ErrorMessage>Preencha o campo corretamente.</S.ErrorMessage> }
                    </S.InputGroup>

                    <S.CheckGroup>
                        <S.Input 
                            type="checkbox"
                            id="checkTerms"
                            required
                        />
                        <S.Label htmlFor="checkTerms">Declaro que li e concordo com todos os termos.</S.Label>
                    </S.CheckGroup>

                    <Button label='Cadastrar'/>

                    <S.AlertMessage>
                        Já possui cadastro? <Link to="/login">Faça login.</Link>
                    </S.AlertMessage>
                </S.Form>
            </S.FormSide>
        </S.RegisterWrapper>
    )
}