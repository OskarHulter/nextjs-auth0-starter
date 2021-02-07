import React, { FC } from 'react'
import UserProvider, { useUser } from '../../utils/user'

export const Store: FC = ({ children }) => {
  const { user, isLoading } = useUser()

  return (
    <UserProvider value={{ user, isLoading }}>
      {children}
    </UserProvider>
  )
}
