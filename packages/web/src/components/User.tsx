import { useState } from 'react'

import { Admin } from './Admin'
import { SignUp } from './SignUp'
import { SignIn } from './SignIn'
import { FaReact } from 'react-icons/fa'

export const User = () => {
  const [userScreen, setUserScreen] = useState('sign_in')

  const routes = {
    sign_in: SignIn,
    sign_up: SignUp,
    admin: Admin,
  }

  const UserScreen = routes[userScreen]

  return <UserScreen stateUserScreen={[userScreen, setUserScreen]} />
}
