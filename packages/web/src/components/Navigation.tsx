import React, { useState, useEffect } from 'react'

import { IButtonsAnimate } from '../../src/interfaces/components/Navigation'

import {
  Button,
  IconHome,
  IconUsers,
  IconTeam,
  ContainerTab,
  ContainerVirtualButtons,
} from '../../styles/components/Navigation'

export const Navigation = () => {
  const [animate, setAnimate] = useState<IButtonsAnimate>({
    team: false,
    home: true,
    users: false,
  })

  useEffect(() => {}, [animate])

  const buttonAnimate = (nameButton) => {
    if (!animate[nameButton]) {
      setAnimate((state) => {
        const stateFalsies = Object.keys(state).forEach((v) => (state[v] = false))
        const updatedState = { ...(stateFalsies as any), [nameButton]: true }
        return updatedState
      })
    }
  }

  return (
    <>
      <ContainerTab>
        <ContainerVirtualButtons>
          <Button animate={animate.team} onClick={() => buttonAnimate('team')}>
            <IconTeam />
          </Button>
          <Button animate={animate.home} onClick={() => buttonAnimate('home')}>
            <IconHome />
          </Button>
          <Button animate={animate.users} onClick={() => buttonAnimate('users')}>
            <IconUsers />
          </Button>
        </ContainerVirtualButtons>
      </ContainerTab>
    </>
  )
}
