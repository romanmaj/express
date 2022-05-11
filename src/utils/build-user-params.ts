import { Request } from 'express'
import { IUser } from '../models/user.model'

export const buildUserParams = (req: Request) => {
    return { email: req.body.email, password: req.body.password } as IUser
}
