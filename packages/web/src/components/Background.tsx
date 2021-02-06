import Link from 'next/link'
import Head from 'next/head'

import useTranslation from '../hooks/useTranslation'

import {
  Container,
  ContainerFooter,
  ContainerLogo,
  ImageIA,
  ImagePlatiot,
  ImageWave,
  Slogan,
} from '../../styles/components/Background'

export const Background = () => {
  const { t } = useTranslation()
  const presentation = t('presentation')
  const brasti = t('brasti')
  const corona = t('corona')

  return (
    <>
      <Container>
        <ContainerLogo>
          <ImagePlatiot />
          <Slogan>
            {presentation.slogan}
            {corona.slogan}
          </Slogan>
          <ImageIA />
        </ContainerLogo>
        <ContainerFooter>{/* <ImageWave /> */}</ContainerFooter>
      </Container>
    </>
  )
}
