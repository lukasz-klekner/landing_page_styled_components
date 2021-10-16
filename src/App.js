import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './GlobalStyles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  )
}

export default App
