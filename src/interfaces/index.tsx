import { ReactNode } from "react"

export interface IUserProps {
    name: string
    email: string
    password: string
    tel: string
}

export interface IChildren {
    children: ReactNode
}

export interface IRandomUsersProps {
    name: string
    email: string
    picture: string
}