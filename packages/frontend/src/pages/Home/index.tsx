import React, { memo } from 'react'

import Header from '../../components/Header'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div>content</div>
    </>
  )
}

export default memo(Home)
