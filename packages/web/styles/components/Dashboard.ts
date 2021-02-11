import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99999999999;
  margin-top: 10vh;
  margin-bottom: 25vh;
  height: auto;
  width: 45vw;
  display: flex;
  flex-direction: row;
  box-shadow: 4px 4px 20px 3px rgb(37 134 255 / 33%);
  border-radius: 32px;
  background: ${(props) => props.theme.colors.secondary.one};
`
export const Content = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  align-items: baseline;
  width: 90%;
  z-index: 9999;

  position: relative;
  box-sizing: border-box;

  color: #fff;
  background: white;
  background-clip: padding-box; /* !importanté */
  border: solid $border transparent; /* !importanté */
  border-radius: 2em;

  h1 {
    color: black;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  height: 100%;

  width: 15%;

  position: relative;
  box-sizing: border-box;

  color: #fff;
  background: ${(props) => props.theme.colors.secondary.one};
  background-clip: padding-box; /* !importanté */
  border: solid $border transparent; /* !importanté */
  border-radius: 2em;
`
