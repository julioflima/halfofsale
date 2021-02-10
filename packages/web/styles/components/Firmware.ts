import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IA } from '../../src/assets/svg/iaa.svg'

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
    font-size: 1.5rem;
    height: 3rem;
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.primary.one} 0%,
      ${(props) => props.theme.colors.secondary.one} 100%
    );
    color: white;
    border: none;
    border-radius: 5rem;
  }

  & button:hover {
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.primary.one} 0%,
      ${(props) => props.theme.colors.secondary.one + '66'} 100%
    );
  }
`

export const TextContainer = styled.div`
  width: 100%;

  & input {
    margin: 1rem 0;
    outline: none;
    width: fit-content;
    min-width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.three};
    padding: 0.5rem;
  }
`

export const VersionContainer = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  align-items: flex-end;
  width: 100%;
  position: relative;
  justify-content: center;

  & input {
    outline: none;
    width: fit-content;
    min-width: 7rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.three};
    padding: 0.5rem;
  }

  & span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.tertiary.two};
    margin: 0.5rem;
    margin-bottom: 0;
  }
`

export const Version = styled.input`
  /* outline: none; */
`
