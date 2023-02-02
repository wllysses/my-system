import { IUserProps } from "../interfaces"

const url = 'http://localhost:3000/users'

export const registerUser = async ({ name, email, password, tel }: IUserProps): Promise<void> => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            tel: tel
        })
    })
}

export const getUsers = async (): Promise<IUserProps[]> => {
    const response = await fetch(url)
    const data = await response.json()

    return await data
}

export const getRandomUsers = async (page: number) => {
    const url = `https://randomuser.me/api/?page=${page}&results=24&seed=abc`
    const response = await fetch(url)
    const data = await response.json()

    return await data.results
}