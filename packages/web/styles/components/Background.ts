import React from 'react'
import styled from 'styled-components'

import marine from '../../src/assets/tiny/marine.jpg'
import { wavingForward, wavingBack } from '../animations'

import { ReactComponent as Platiot } from '../../src/assets/svg/platiot.svg'
import { ReactComponent as Wave } from '../../src/assets/svg/wavies.svg'
import { ReactComponent as IA } from '../../src/assets/svg/iaa.svg'

export const ImageMarine = styled.div`
  background-image: url(${marine});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
`

export const ContainerMain = styled(ImageMarine)`
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const ContainerLogo = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Slogan = styled.h1`
  font-family: monospace;
  margin-top: 1rem;
  color: white;
  font-size: 1.5rem;
  height: auto;
  width: fit-content;
  font-weight: 100;
`

export const ImagePlatiot = styled(Platiot)`
  height: auto;
  width: 25vw;
  z-index: 5;
  margin-top: 20%;
`

export const ContainerFooter = styled.div`
  width: 100vw;
  height: 0;
  position: fixed;
  border: 0;
  z-index: 9999;
  float: left;
`

export const ImageWaveDarkBlue = styled(Wave)`
  height: auto;
  width: 150vw;
  z-index: -1;
  position: fixed;
  bottom: -10vh;
  animation: 10s ${wavingForward('-10%', '-10%')} infinite linear;
  path {
    fill: ${(props) => props.theme.colors.tertiary.two};
  }
`

export const ImageWaveLightBlue = styled(Wave)`
  height: auto;
  width: 150vw;
  z-index: 7;
  position: fixed;
  bottom: -20vh;
  transform: translate(-10%, -10%);
  animation: 10s ${wavingBack('-10%', '-10%')} infinite linear;

  path {
    fill: ${(props) => props.theme.colors.quaternary.two};
  }
`

export const ImageWaveWhite = styled(Wave)`
  height: auto;
  width: 150vw;
  z-index: 6;
  position: fixed;
  bottom: -15vh;
  animation: 10s ${wavingForward('0%', '-10%')} infinite linear;
  transform: translatex(-20%);
  path {
    fill: white;
  }
`

export const ImageIA = styled(IA)`
  height: auto;
  width: 15vw;
  z-index: 5;
  margin-top: 3vh;
`
