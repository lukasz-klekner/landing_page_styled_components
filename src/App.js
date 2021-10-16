import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>Hello React & styled-components</div>
      </>
    </ThemeProvider>
  )
}

export default App
