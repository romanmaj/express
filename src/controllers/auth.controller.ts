import { Request, Response } from 'express'
import * as bcrypt from 'bcrypt'

import { buildUserParams } from '../utils/build-user-params'
import { generateAccessToken } from '../utils/jwt'
import { LoginStatus } from '../enums/login-status.enum'
import { checkPassword } from '../utils/check-password'
import { User } from '../models/user.model'

class AuthController {
    async createUser(req: Request, res: Response) {
        try{
            const userParams = buildUserParams(req)

            const isUserExist = !!(await User.findOne({ email: userParams.email }))

            if(isUserExist) {
                return res.json({ message: 'User already exist' })
            }

            userParams.password = bcrypt.hashSync(userParams.password, 10)

            const newUser = User.build(userParams)
            await newUser.save()

            const token = generateAccessToken(newUser._id)

            return res.json({ token })
        } catch(error) {
            res.json({ message: 'Registration error', error })
        }
        
    }

    async login(req: Request, res: Response) {
        try {
            const userParams = buildUserParams(req)
 
            const user = await User.findOne({ username: userParams.email })

            if(!user) {
                return res.json(LoginStatus.fail)
            }

            const isPasswordValid = checkPassword(userParams.password, user.password)

            if(!isPasswordValid) {
                return res.json({ message: 'Invalid password' })
            }
            const token = generateAccessToken(user._id)

            return res.json({ status: LoginStatus.success, token})
        } catch(error) {
            res.json({ message: 'Login error', error })
        }
    }
}

export default new AuthController()