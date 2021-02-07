import auth0 from '../../utils/auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { handleError } from '../../utils/functions'
import { ProfileOptions } from '@auth0/nextjs-auth0/dist/handlers/profile'

export default async function getCurrentUser(
  req: NextApiRequest, 
  res: NextApiResponse,
  options: ProfileOptions = { refetch: true }
  ): Promise<void> {

  try {
    await auth0.handleProfile(req, res, options)
  } catch (error) {
    handleError(error, res)
  }
}
