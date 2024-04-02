import { FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Field, SectionText } from '@/components'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { t } = useTranslation()

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) {
      return
    }
    const value = e.currentTarget

    emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
      result => {
        setFormSubmitted(true)
        console.log(result.text)
        value.reset()
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <StyledForm onSubmit={sendEmail} ref={form}>
      <Field label={`${t('fieldName', { ns: 'contacts' })}`} name={'name'} />
      <Field label={`${t('fieldEmail', { ns: 'contacts' })}`} name={'email'} type={'email'} />
      <Field label={`${t('fieldMessage', { ns: 'contacts' })}`} name={'message'} />
      <Button type={'submit'}>{t('sendButton', { ns: 'main' })}</Button>
      {formSubmitted && <SectionText>{t('formSubmittedText', { ns: 'contacts' })}</SectionText>}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`
