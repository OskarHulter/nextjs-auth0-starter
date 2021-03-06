import auth0 from '../../utils/auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { LogoutOptions } from '@auth0/nextjs-auth0/dist/handlers/logout'
import { handleError } from '../../utils/functions'

const defaultOptions: LogoutOptions = {
  returnTo:'/',
}

export default async function logout(
  req: NextApiRequest, 
  res: NextApiResponse,
  options: LogoutOptions = defaultOptions
  ): Promise<void> {

  try {
    await auth0.handleLogout(req, res, options)
  } catch (error) {
    handleError(error, res)
  }
}