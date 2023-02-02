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

export interface IRandomUserProps {
    name: {
        first: string
        last: string
    }
    email: string
    picture: {
        large: string
    }
}

export interface ICardProps {
    firstName: string
    lastName: string
    email: string
    picture: string
}