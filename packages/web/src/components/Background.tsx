import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'

import {
  Container,
  ContainerMain,
  ContainerFooter,
  ContainerLogo,
  ImageIA,
  ImagePlatiot,
  ImageWaveDarkBlue,
  ImageWaveLightBlue,
  ImageWaveWhite,
  Slogan,
} from '../../styles/components/Background'

export const Background = (props) => {
  const { children } = props

  const { t } = useTranslation()
  const slogan = t('slogan')

  return (
    <Container>
      <ContainerMain>
        <ContainerLogo>
          <ImagePlatiot />
          <Slogan>{slogan}</Slogan>
          <ImageIA />
        </ContainerLogo>
        {children}
      </ContainerMain>
      <ContainerFooter>
        <ImageWaveDarkBlue />
        <ImageWaveWhite />
        <ImageWaveLightBlue />
      </ContainerFooter>
    </Container>
  )
}
