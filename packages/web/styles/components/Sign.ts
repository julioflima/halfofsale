import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  & h1 {
    font-weight: 100;
    margin-top: 1rem;
    margin-bottom: 5rem;
    color: ${(props) => props.theme.colors.tertiary.two};
    font-size: 1.5rem;
    border-radius: 5rem;
    padding: 0.7rem;
    width: 100%;
  }

  & button {
    margin-top: 1.5rem;
    outline: none;
    width: 10rem;
    font-size: 1.25rem;
    height: 2.5rem;
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.primary.one} 0%,
      ${(props) => props.theme.colors.secondary.one} 100%
    );
    color: white;
    border: none;
    border-radius: 5rem;
    z-index: 9999999999999999999;
    margin: 2rem 0;
    cursor: pointer;
  }

  & button:hover {
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.primary.one + 'e0'} 0%,
      ${(props) => props.theme.colors.secondary.one + 'e0'} 100%
    );
    transform: scale(1.02);
  }
`

export const TextContainer = styled.div`
  width: 100%;
  padding: 0 6rem;

  & input {
    margin: 1rem 0;
    outline: none;
    width: fit-content;
    min-width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.three};
    padding: 0.5rem;
    margin-bottom: 0;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  & input:nth-child(2) {
    margin: 0;
    border-top: 0px;
    border-radius: 0;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  & input:nth-child(3) {
    margin: 0;
    border-top: 0px;
    border-radius: 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`
export const TextNotHaveAccout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
  margin-bottom: 2rem;
  padding: 0 6rem;

  & span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.tertiary.one};
  }

  & span:nth-child(2) {
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary.one};
  }
`
