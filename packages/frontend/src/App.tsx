import Routes from './Routes'
import GlobalStyle from './styles/global'
import Theme from './styles/Theme'

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  )
}

export default App
