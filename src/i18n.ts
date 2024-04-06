import { initReactI18next } from 'react-i18next'

import i18next from 'i18next'

import enAboutMe from './locales/en/enAboutMe.json'
import enContacts from './locales/en/enContacts.json'
import enFooter from './locales/en/enFooter.json'
import enHeader from './locales/en/enHeader.json'
import enMain from './locales/en/enMain.json'
import enPortfolio from './locales/en/enPortfolio.json'
import enSkills from './locales/en/enSkills.json'
import ruAboutMe from './locales/ru/ruAboutMe.json'
import ruContacts from './locales/ru/ruContacts.json'
import ruFooter from './locales/ru/ruFooter.json'
import ruHeader from './locales/ru/ruHeader.json'
import ruMain from './locales/ru/ruMain.json'
import ruPortfolio from './locales/ru/ruPortfolio.json'
import ruSkills from './locales/ru/ruSkills.json'

i18next.use(initReactI18next).init({
  debug: true,
  defaultNS: 'ns1',
  fallbackLng: 'en',
  fallbackNS: 'fallback',
  resources: {
    en: {
      aboutMe: enAboutMe,
      contacts: enContacts,
      footer: enFooter,
      header: enHeader,
      main: enMain,
      portfolio: enPortfolio,
      skills: enSkills,
    },
    ru: {
      aboutMe: ruAboutMe,
      contacts: ruContacts,
      footer: ruFooter,
      header: ruHeader,
      main: ruMain,
      portfolio: ruPortfolio,
      skills: ruSkills,
    },
  },
})

export default i18next
