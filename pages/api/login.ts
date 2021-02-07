import auth0 from '../../utils/auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { LoginOptions } from '@auth0/nextjs-auth0/dist/handlers/login'
import { handleError } from '../../utils/functions'

const defaultOptions: LoginOptions = {
      authParams: {
        login_hint:'email@example.com',
        ui_locales: 'no',
      },
      redirectTo:'/',
}

export default async function login(
  req: NextApiRequest, 
  res: NextApiResponse,
  options: LoginOptions = defaultOptions
  ): Promise<void> {

  try {
    await auth0.handleLogin(req, res, options)
  } catch (error) {
    handleError(error, res)
  }
}