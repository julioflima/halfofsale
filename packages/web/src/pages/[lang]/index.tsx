import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getLocalizationProps, LanguageProvider } from '../../context/LanguageContext'
import { Localization } from '../../translations/types'
import { Background } from '../../components/Background'
import { Dashboard } from '../../components/Dashboard'
import { routes } from '../../routes/routes'
import { route } from 'next/dist/next-server/server/router'

const home = routes.find((route) => route.page === 'sign-in')

const IndexPage: NextPage<{
  localization: Localization
}> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Background>
      <Dashboard path={home.page} component={home.component} />
    </Background>
  </LanguageProvider>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'common')
  return {
    props: {
      localization,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['en', 'pt'].map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}

export default IndexPage
