import * as jwt from 'jsonwebtoken'
import { config } from '../../config'

export const generateAccessToken = (userId: string) => {
    const payload = { userId }

    return jwt.sign(payload, config.jwtSecret, {expiresIn: '1h'})
}