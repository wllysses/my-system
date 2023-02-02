import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren, IRandomUsersProps, IUserProps } from "../../interfaces";
import { registerUser, getUsers, getRandomUsers } from "../../services/api";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }: IChildren) => {

    const [randomUsers, setRandomUsers] = useState<IRandomUsersProps[]>([])
    const [page, setPage] = useState<number>(1)
    const navigate = useNavigate()

    //function to user register
    const handleRegister: SubmitHandler<IUserProps> = async (data): Promise<void> => {

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
    const handleLogin: SubmitHandler<IUserProps> = async (data): Promise<void> => {
        
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

    const handlePrevPage = () => {
        page > 1 && setPage(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        const handleGetUsers = async () => {
            const data = await getRandomUsers(page)
            setRandomUsers(data)
        }

        handleGetUsers()
    }, [page])



    return (
        <GlobalContext.Provider value={{ handleRegister, handleLogin, randomUsers, handlePrevPage, handleNextPage, page }}>
            {children}
        </GlobalContext.Provider>
    )
}