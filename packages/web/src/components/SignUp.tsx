import React from 'react'

import { IconBack, TextContainer, Container } from '../../styles/components/SignUp'

import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

export const SignUp = (props) => {
  const [, setUserScreen] = props.stateUserScreen

  return (
    <Container>
      <h1>
        <span>
          <IconBack
            onClick={() => {
              setUserScreen('sign_in')
              toast('🦄 Wow so easy!')
            }}
          />
        </span>
        Sign Up
      </h1>
      <TextContainer>
        <input type="text" placeholder={'Name'} />
        <input type="text" placeholder={'Username'} />
        <input type="text" placeholder={'Password'} />
      </TextContainer>
      <button>Enter</button>
    </Container>
  )
}
