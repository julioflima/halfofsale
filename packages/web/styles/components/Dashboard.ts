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
`

export const ImagePlatiot = styled(Platiot)`
  height: auto;
  width: 5rem;
  display: inline-block;
  margin: auto;
  z-index: 5;
`
export const ImageWave = styled(Wave)`
  height: auto;
  width: 5rem;
  display: inline-block;
  margin: auto;
  z-index: 5;
`

export const ImageIA = styled(IA)`
  height: auto;
  width: 5rem;
  display: inline-block;
  margin: auto;
  z-index: 5;
`
