import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { ContactsForm, Container, FlexWrapper, SectionText, SectionTitle } from '@/components'
import { SocialIcons } from '@/layout/section/contacts/social-icons/social-icons'
import styled from 'styled-components'

const icons = [
  { id: 'linkedin', url: 'https:linkedin.com/in/henadzi-lobotskij-037a7524a/' },
  { id: 'telegram', url: 'https://t.me/Gennadij1997' },
  { id: 'email', url: 'mailto:utyf309116@gmail.com' },
  { id: 'github', url: 'https://github.com/GennadiiPaninov' },
]

export const Contacts = () => {
  const { t } = useTranslation()

  return (
    <StyledContacts id={'contacts'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'contacts' })}</SectionTitle>

        <Fade>
          <FlexWrapper direction={'column'} gap={'40px'} justify={'center'}>
            <SectionText>{t('description', { ns: 'contacts' })}</SectionText>
            <SocialIcons icons={icons} />
            <ContactsForm />
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  position: relative;
`
