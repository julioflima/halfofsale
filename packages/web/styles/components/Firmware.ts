import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IA } from '../../src/assets/svg/iaa.svg'

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 0 3rem;
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
  justify-content: space-between;

  & input {
    outline: none;
    width: fit-content;
    min-width: 7rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.three};
    padding: 0.5rem;
    padding-top: 0.8rem;
    border-top: 0px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }

  & span:nth-child(1) {
    position: absolute;
    width: 0;
    margin: 0;
    z-index: 99999999;
    left: -2rem;
    top: 1rem;

    & span {
      position: fixed;
      z-index: 99999999;
      left: revert;
      top: revert;
      padding-left: 1rem;
    }
  }

  & span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.tertiary.four};
    margin: 0.5rem;
    margin-bottom: 0.8rem;
  }
`

export const Version = styled.input`
  /* outline: none; */
`
