import Link from 'next/link'
import Head from 'next/head'

import useTranslation from '../hooks/useTranslation'

import {} from '../../styles/components/Dashboard'

export const Background = (props) => {
  const { children } = props

  const { t } = useTranslation()
  const slogan = t('slogan')

  return <></>
}
