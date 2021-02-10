import { useCallback, useState } from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getLocalizationProps, LanguageProvider } from '../../context/LanguageContext'
import { Localization } from '../../translations/types'
import { Background } from '../../components/Background'
import { Dashboard } from '../../components/Dashboard'
import { routes } from '../../routes/routes'

const IndexPage: NextPage<{
  localization: Localization
}> = ({ localization }) => {
  const initialPage = routes.sign_in

  const [page, setPage] = useState(initialPage)

  return (
    <LanguageProvider localization={localization}>
      <Background>
        <Dashboard component={initialPage()} />
      </Background>
    </LanguageProvider>
  )
}

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
