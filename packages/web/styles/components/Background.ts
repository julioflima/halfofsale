import React from 'react'
import styled from 'styled-components'

import marine from '../../src/assets/tiny/marine.jpg'

import { ReactComponent as Platiot } from '../../src/assets/svg/platiot.svg'
import { ReactComponent as Wave } from '../../src/assets/svg/wave.svg'
import { ReactComponent as IA } from '../../src/assets/svg/ia.svg'

export const ImageMarine = styled.div`
  background-image: url(${marine});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const Container = styled(ImageMarine)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const ContainerFooter = styled.div`
  width: 100vw;
  display: absolute;
  border: 0;
  z-index: 9999;
`

export const ContainerLogo = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Slogan = styled.h1`
  color: white;
  font-size: 2rem;
  height: auto;
  width: 10rem;
`

export const ImagePlatiot = styled(Platiot)`
  height: auto;
  width: 10rem;
  z-index: 5;
`
export const ImageWave = styled(Wave)`
  height: auto;
  width: 25rem;
  z-index: 5;
`

export const ImageIA = styled(IA)`
  height: auto;
  width: 10rem;
  z-index: 5;
`
