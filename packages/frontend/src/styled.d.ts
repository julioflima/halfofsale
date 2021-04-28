import 'styled-components'

interface color {
  one: string
  two: string
  three: string
  four: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: color
      secondary: color
      tertiary: color
      quaternary: color
    }
  }
}
