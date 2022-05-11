import { Request, Response, NextFunction } from 'express'
import { buildUserParams } from '../utils/build-user-params'
import { isEmpty } from '../utils/is-empty'
import { LoginStatus } from '../enums/login-status.enum'


export const auth =  (req: Request, res: Response, next: NextFunction) => {
    const userParams = buildUserParams(req)

    if(isEmpty(userParams.email)) return res.json(LoginStatus.missingUsername)
    if(isEmpty(userParams.password)) return res.json(LoginStatus.missingPassword)

    next()
}