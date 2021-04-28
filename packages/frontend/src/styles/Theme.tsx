import React from 'react'

import { theme } from '../constants/theme'
import { ThemeProvider } from 'styled-components'

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
