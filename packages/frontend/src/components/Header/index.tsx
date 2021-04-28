/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'

import { Container, Image } from './styles'

import { title } from '../../constants/text'

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <a href="#">
              <h3>About-us</h3>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Experiences</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <Image />
              <h2>{title}</h2>
            </a>
          </li>
          <li>
            <a>
              <h3>List</h3>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Contact</h3>
            </a>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default memo(Header)
