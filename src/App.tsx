import { BackgroundParticle, Cursor, Header } from '@/components'
import { LanguageSwitcher } from '@/layout/languageSwicher/languageSwitcher'
import { Main } from '@/layout/section/main'
import { theme } from '@/styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      <BackgroundParticle />
      <Header />
      <LanguageSwitcher />
      <Main />
    </ThemeProvider>
  )
}

export default App
