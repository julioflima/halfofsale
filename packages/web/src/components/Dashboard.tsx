import useTranslation from '../hooks/useTranslation'

import { Navigation } from './Navigation'

import { Container, Content, Nav } from '../../styles/components/Dashboard'
import { TDashboard } from '../interfaces/components/TDashboard'

import { routes } from '../routes/routes'

export const Dashboard: React.FC<TDashboard> = ({ component }) => {
  const { t } = useTranslation()
  const slogan = t('slogan')

  return (
    <>
      <Container>
        <Content>{component}</Content>
        <Navigation />
      </Container>
    </>
  )
}
