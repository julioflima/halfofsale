import { TextNotHaveAccout, TextContainer, Container } from '../../styles/components/SignIn'

export const SignIn = (props) => {
  const [userScreen, setUserScreen] = props.stateUserScreen
  return (
    <Container>
      <h1>Sign In</h1>

      <TextContainer>
        <input type="text" placeholder={'Username'} />
        <input type="text" placeholder={'Password'} />
      </TextContainer>
      <button>Enter</button>

      <TextNotHaveAccout>
        <span>Don't have account</span>
        <span onClick={() => setUserScreen('sign_up')}>Enter now!</span>
      </TextNotHaveAccout>
    </Container>
  )
}
