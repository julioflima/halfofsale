import { AppProps } from 'next/app'

import GlobalStyle from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999999999999999999 }}
      />
    </ThemeProvider>
  )
}

export default MyApp
