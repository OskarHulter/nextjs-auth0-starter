import { Layout, Menu } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import { useUser } from '../../utils/user'

const { Header } = Layout

const StyledHeader = styled(Header)`
  background-color: #dddbe8;
  .ant-menu {
    width: 100%;
    background-color: #dddbe8;
    a {
      height: 64px;
    }
  }
`

const Navbar = () => {
  const { user, isLoading } = useUser()

  return (
    <StyledHeader>
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {user && !isLoading &&
          [
            <Menu.Item key="/api/logout">
              <Link href="/api/logout">
                <a>Logout</a>
              </Link>
            </Menu.Item>,
            <Menu.Item key="/profile">
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </Menu.Item>,
          ]}
        {!user && !isLoading && (
          <Menu.Item key="/api/login">
            <Link href="/api/login">
              <a>Login</a>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </StyledHeader>
  )
}

export default Navbar
