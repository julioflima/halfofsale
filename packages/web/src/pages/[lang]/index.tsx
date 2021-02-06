import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getLocalizationProps, LanguageProvider } from '../../context/LanguageContext'
import { Localization } from '../../translations/types'
import { Navigation } from '../../components//Navigation'
import { Background } from '../../components/Background'

const IndexPage: NextPage<{
  localization: Localization
}> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Background />
    {/* <Navigation /> */}
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
