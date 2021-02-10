import React, { useState, useEffect } from 'react'

import { IButtonsAnimate } from '../../src/interfaces/components/Navigation'

import {
  Button,
  IconFirmware,
  IconUser,
  IconList,
  ContainerTab,
  ContainerVirtualButtons,
} from '../../styles/components/Navigation'

export const Navigation = ({ statePage }) => {
  const [, setPage] = statePage

  const [animate, setAnimate] = useState<IButtonsAnimate>({
    user: true,
    firmware: false,
    list: false,
  })

  const buttonAnimate = (nameButton: string) => {
    if (!animate[nameButton]) {
      setAnimate((state) => {
        const stateFalsies = Object.keys(state).forEach((v) => (state[v] = false))
        const updatedState = { ...(stateFalsies as any), [nameButton]: true }
        setPage(nameButton)
        return updatedState
      })
    }
  }

  return (
    <>
      <ContainerTab>
        <ContainerVirtualButtons>
          <Button animate={animate.user} onClick={() => buttonAnimate('user')}>
            <IconUser />
          </Button>
          <Button animate={animate.firmware} onClick={() => buttonAnimate('firmware')}>
            <IconFirmware />
          </Button>
          <Button animate={animate.list} onClick={() => buttonAnimate('list')}>
            <IconList />
          </Button>
        </ContainerVirtualButtons>
      </ContainerTab>
    </>
  )
}
