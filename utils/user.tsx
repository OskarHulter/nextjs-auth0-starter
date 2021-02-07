import { createContext, useEffect, useContext, FC } from 'react'
import { User } from 'auth0'
import { useImmer } from 'use-immer'
import fetch from 'isomorphic-unfetch'
import { UserState } from '../types'

const defaultState: UserState = {
  user: null,
  isLoading: false
}

const UserContext = createContext<UserState>(defaultState)

const UserProvider: FC<{ value: UserState }> = ({ value, children }) => {

  const [userState, setUserState] = useImmer<UserState>({
    user: value?.user ?? null,
    isLoading: value?.user === undefined,
  })

  function setUser(newUser: User): void {
    setUserState(draft => {
      draft.user = newUser
      draft.isLoading = draft.user === undefined
    })
  }

  async function fetchUser() {
    if (userState !== undefined) {
      return userState
    }

    const res = await fetch('/api/getCurrentUser')
    let data = res.ok ? await res.json() : null
    return data
  }


  // sync provider if the user was fetched on server
  useEffect(() => {
    if (!userState.user && value.user) {
      setUser(value.user)
    }
  }, [])

  // fetch user if unset, cancels if component is unmounted
  useEffect(() => {
    if (userState.user !== undefined) {
      return
    }

    let isMounted = true

    fetchUser().then((user: User) => {
      if (isMounted) {
        setUser(user)
      }
    })

    return () => {
      isMounted = false
    }
  }, [userState.user])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserState {
  const { user, isLoading } = useContext(UserContext)

  return { user, isLoading }
}

export default UserProvider
