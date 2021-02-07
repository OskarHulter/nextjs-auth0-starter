import { FC } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../components/layout/MainLayout'
import Loading from '../components/Loading'
import { redirect } from '../utils/functions'
import { useUser } from '../utils/user'

const Profile: FC = () => {

  const { user, isLoading } = useUser()

  { isLoading && <Loading /> }
  { !user && !isLoading && redirect() }

  return (
    <MainLayout>
      <StyledProfile>
        <h1>🤸</h1>
        <p>profile information:</p>
        <p>{JSON.stringify(user)}</p>
      </StyledProfile>
    </MainLayout>
  )
}

const StyledProfile = styled.div`
  padding: 50px 10px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
`

export default Profile