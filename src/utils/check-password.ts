import * as bcrypt from 'bcrypt'

export const checkPassword = (password: string, encrypted: string) => {
    const isPasswordValid = bcrypt.compareSync(password, encrypted)

    return !!isPasswordValid

}