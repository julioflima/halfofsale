import { Add } from '../components/Add'
import { Admin } from '../components/Admin'
import { List } from '../components/List'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'

export const routes = {
  sign_in: () => SignIn,
  sign_up: () => SignUp,
  admin: () => Admin,
  list: () => List,
  add: () => Add,
}
