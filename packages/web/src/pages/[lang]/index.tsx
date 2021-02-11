import { useCallback, useState } from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getLocalizationProps, LanguageProvider } from '../../context/LanguageContext'
import { Localization } from '../../translations/types'
import { Background } from '../../components/Background'
import { Dashboard } from '../../components/Dashboard'
import { locales } from '../../translations/config'

const IndexPage: NextPage<{
  localization: Localization
}> = ({ localization }) => {
  const statePage = useState('user')

  return (
    <LanguageProvider localization={localization}>
      <Background>
        <Dashboard statePage={statePage} />
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
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}

export default IndexPage
