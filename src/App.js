import styled, { ThemeProvider } from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import content from './content'
import GlobalStyles from './GlobalStyles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <S.Container>
          {content.map((item, id) => (
            <Card key={id} item={item} />
          ))}
        </S.Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

const S = {
  Container: styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  `,
}

export default App
