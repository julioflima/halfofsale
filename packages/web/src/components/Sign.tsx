import { TextNotHaveAccout, TextContainer, Container } from '../../styles/components/Sign'

export const Sign = () => {
  return (
    <Container>
      <h1>Sign Up</h1>
      <TextContainer>
        <input type="text" placeholder={'Name'} />
        <input type="text" placeholder={'Username'} />
        <input type="text" placeholder={'Password'} />
      </TextContainer>
      <button>Send</button>

      <TextNotHaveAccout>
        <span>Don't have account</span>
        <span>Enter now!</span>
      </TextNotHaveAccout>
    </Container>
  )
}
