import { BackgroundParticle, Cursor, Header } from '@/components'
import { GoTopButton } from '@/components/go-top-button/go-top-button'
import { LanguageSwitcher } from '@/layout/languageSwicher/languageSwitcher'
import { AboutMe } from '@/layout/section/about-me/about-me'
import { Contacts } from '@/layout/section/contacts/contacts'
import { Footer } from '@/layout/section/footer/footer'
import { Main } from '@/layout/section/main'
import { Portfolio } from '@/layout/section/portfolio/portfolio'
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
      <Portfolio />
      <Contacts />
      <Footer />
      <GoTopButton />
    </ThemeProvider>
  )
}

export default App
