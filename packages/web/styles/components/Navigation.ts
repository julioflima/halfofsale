import React from 'react'
import styled, { css } from 'styled-components'

import { IButton } from '../../src/interfaces/components/Navigation'

import { FiHome, FiUsers, FiUser, FiLock, FiShield } from 'react-icons/fi'

import { liquid } from '../animations'

export const ContainerTab = styled.span`
  z-index: 999999;
  bottom: 0;
  display: flex;
  width: 10%;
`

export const ContainerVirtualButtons = styled.span`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${(props) => props.theme.colors.tertiary.one + '66'} !important;
`

export const Button = styled.span<IButton>`
  height: 4rem;
  width: 4rem;
  z-index: 2;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  position: relative;
  left: ${(props) => (props.animate ? ' -2.7rem' : '')};
  color: ${(props) => (props.animate ? 'white' : '')};
  cursor: pointer;

  box-shadow: ${(props) =>
    props.animate
      ? css`
          4px 4px 10px ${(props) => props.theme.colors.secondary.three + '33'},
          -4px -4px 10px ${(props) => props.theme.colors.primary.one + '66'};
        `
      : ''};
  background: ${(props) =>
    props.animate
      ? css`
          linear-gradient(225deg, ${(props) => props.theme.colors.primary.one} 0%, ${(props) =>
          props.theme.colors.secondary.one}  100%);
        `
      : ''};
  transform: rotate(45deg);

  animation: ${(props) =>
    props.animate
      ? css`
          ${liquid('-2.5rem')} ease-in-out 1s
        `
      : ''};
` as React.FC<IButton>

export const IconHome = styled(FiHome)`
  height: auto;
  width: 1rem;
  z-index: 2;
  margin: auto;
  transform: rotate(-45deg);
`

export const IconUsers = styled(FiUser)`
  height: auto;
  width: 1rem;
  display: inline-block;
  margin: auto;
  z-index: 5;
  transform: rotate(-45deg);
`
export const IconTeam = styled(FiUsers)`
  height: auto;
  width: 1rem;
  display: inline-block;
  margin: auto;
  z-index: 5;
  transform: rotate(-45deg);
`
