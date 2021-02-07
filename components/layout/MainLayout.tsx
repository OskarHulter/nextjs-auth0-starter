import { Layout } from 'antd'
import React, { FC } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import UserProvider, { useUser } from '../../utils/user'

const { Content } = Layout

const StyledContent = styled(Content)`
  min-height: 100vh;
`

export const MainLayout: FC = ({ children }) => {
  const { user, isLoading } = useUser()

  return (
    <UserProvider value={{ user, isLoading }}>
      <Layout>
        <Navbar />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </UserProvider>
  )
}
