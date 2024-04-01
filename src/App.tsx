import { BackgroundParticle, Cursor, Header } from '@/components'
import { theme } from '@/styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      <BackgroundParticle />
      <Header />
    </ThemeProvider>
  )
}

export default App
