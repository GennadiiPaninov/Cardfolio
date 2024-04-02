import { BackgroundParticle, Cursor, Header } from '@/components'
import { LanguageSwitcher } from '@/layout/languageSwicher/languageSwitcher'
import { AboutMe } from '@/layout/section/about-me/about-me'
import { Main } from '@/layout/section/main'
import { Skills } from '@/layout/section/skills/skills'
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
      <AboutMe />
      <Skills />
    </ThemeProvider>
  )
}

export default App
