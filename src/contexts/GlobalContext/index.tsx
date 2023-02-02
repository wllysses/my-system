import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren, IRandomUserProps, IUserProps } from "../../interfaces";
import { registerUser, getUsers, getRandomUsers } from "../../services/api";

interface IContextProps {
    page: number
    randomUsers: IRandomUserProps[]
    handleLogin: SubmitHandler<IUserProps>
    handleRegister: SubmitHandler<IUserProps>
    handlePrevPage: () => void
    handleNextPage: () => void
}

const initialValue = {
    page: 1,
    randomUsers: [],
    handleRegister: () => {},
    handleLogin: () => {},
    handlePrevPage: () => {},
    handleNextPage: () => {}
}

export const GlobalContext = createContext<IContextProps>(initialValue)

export const GlobalProvider = ({ children }: IChildren) => {

    //states
    const [randomUsers, setRandomUsers] = useState<IRandomUserProps[]>(initialValue.randomUsers)
    const [page, setPage] = useState<number>(initialValue.page)
    const navigate = useNavigate()

    //function to user register
    const handleRegister = async (data: IUserProps): Promise<void> => {

        const users = await getUsers()
        const filteredUsers = users.filter((user) => user.email === data.email)

        if(filteredUsers.length !== 0) {
            toast.error('E-mail já cadastrado. Tente novamente.')
        } else {
            await registerUser(data)
            toast.success('Usuário cadastrado com sucesso!')
        }
    }

    //function to user login
    const handleLogin = async (data: IUserProps): Promise<void> => {
        
        const users = await getUsers()
        const filteredUser = users.filter((user) => {
            return user.email === data.email && user.password === data.password
        })

        if(filteredUser.length !== 0) {
            toast.success('Login realizado com sucesso!')
            setTimeout(() => {
                navigate('/users')
            }, 1500)
        } else {
            toast.error('E-mail ou senha incorretos. Tente novamente.')
        }
    }

    //function prev page
    const handlePrevPage = () => {
        page > 1 && setPage(page - 1)
    }

    //function next page
    const handleNextPage = () => {
        setPage(page + 1)
    }

    // get random users data and pagination effect
    useEffect(() => {
        const getUsers = async () => {
            const data = await getRandomUsers(page)
            setRandomUsers(data)
        }

        getUsers()
    }, [page])


    return (
        <GlobalContext.Provider value={{ handleRegister, handleLogin, randomUsers, handlePrevPage, handleNextPage, page }}>
            { children }
        </GlobalContext.Provider>
    )
}