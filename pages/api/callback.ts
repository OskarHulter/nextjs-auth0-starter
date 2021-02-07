import auth0 from '../../utils/auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { handleError } from '../../utils/functions'

export default async function callback(
  req: NextApiRequest, 
  res: NextApiResponse,
  options: {} = {}
  ): Promise<void> {
  try {
    await auth0.handleCallback(req, res, options) 
  } catch (error) {
    handleError(error, res)
  }
}