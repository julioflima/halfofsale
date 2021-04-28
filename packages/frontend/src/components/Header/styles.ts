import styled from 'styled-components'

import Logo from '../../assets/favicon.svg'

export const Container = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary.one};
  height: 10vh;

  & button:last-child {
    margin-right: 0;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary.one};
  }

  & h2 {
    color: ${(props) => props.theme.colors.secondary.one};
  }

  & h2:hover {
    color: ${(props) => props.theme.colors.quaternary.one};
  }

  & h3:hover {
    color: ${(props) => props.theme.colors.secondary.one};
  }

  & h3:hover {
    color: ${(props) => props.theme.colors.secondary.one};
  }

  & ul {
    display: flex;
    list-style: none;
    justify-content: center;
    height: 100%;
    align-items: baseline;
  }

  & li {
    min-width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  & li:nth-child(3) {
    flex: 1;
  }
`

export const Image = styled.span`
  margin-left: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Logo});
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: relative;
    width: 1.2rem;
    height: 1.4rem;
  }
`
