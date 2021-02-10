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

  return (
    <>
      <Container>
        <Content>
          {page === 'list' && <List />}
          {page === 'user' && <User />}
          {page === 'firmware' && <Firmware />}
        </Content>
        <Navigation statePage={statePage} />
      </Container>
    </>
  )
}
