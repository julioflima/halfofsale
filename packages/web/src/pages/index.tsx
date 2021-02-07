import { getInitialLocale } from '../translations/getInitialLocale'
import Head from 'next/head'

import React, { useEffect } from 'react'

const Home: React.FC = () => {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
    document.title = 'Platiot'
  })

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <title>Platiot</title>
    </Head>
  )
}

export default Home
