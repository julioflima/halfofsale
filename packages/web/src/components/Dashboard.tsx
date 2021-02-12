import useTranslation from '../hooks/useTranslation'

import { Navigation } from './Navigation'
import { Container, Content, Nav } from '../../styles/components/Dashboard'
import { Firmware } from '../components/Firmware'
import { List } from '../components/List'
import { User } from '../components/User'

export const Dashboard = ({ statePage }) => {
  const { t } = useTranslation()
  const slogan = t('slogan')

  const [page] = statePage

  const routes = {
    list: List,
    user: User,
    firmware: Firmware,
  }

  const Screen = routes[page]

  return (
    <>
      <Container>
        <Content>
          <Screen />
        </Content>
        <Navigation statePage={statePage} />
      </Container>
    </>
  )
}
