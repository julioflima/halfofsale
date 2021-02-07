import { Add } from '../components/Add'
import { Admin } from '../components/Admin'
import { List } from '../components/List'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import { User } from '../components/User'

export const routes = [
  { page: 'sign-in', component: SignIn },
  { page: 'sign-up', component: SignUp },
  { page: 'admin', component: Admin },
  { page: 'user', component: User },
  { page: 'list', component: List },
  { page: 'add', component: Add },
]
