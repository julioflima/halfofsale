import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'

import { Navigation } from './Navigation'

import { Container, Content, Nav } from '../../styles/components/Dashboard'
import { TDashboard } from '../interfaces/components/TDashboard'

import { routes } from '../routes/routes'

export const Dashboard: React.FC<TDashboard> = ({ path, component }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes.map((item) => ({ params: { page: item.page } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params

  const currentPage = routes.find((route) => route.page === page)

  return { props: { page: currentPage.page, component: currentPage.component } }
}
