import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { Container, FlexWrapper, SectionTitle } from '@/components'
import { Skill } from '@/layout/section/skills/skill/skill'
import { theme } from '@/styles'
import styled from 'styled-components'

const skills = [
  { idIcon: 'js', title: 'Java Script' },
  { idIcon: 'ts', title: 'Type Script' },
  { idIcon: 'react', title: 'React' },
  { idIcon: 'redux', title: 'Redux' },
  { idIcon: 'axios', title: 'Axios' },
  { idIcon: 'storybook', title: 'Storybook' },
  { idIcon: 'git', title: 'Git' },
  { idIcon: 'html', title: 'HTML' },
  { idIcon: 'css', title: 'CSS' },
  { idIcon: 'sass', title: 'SASS' },
  { idIcon: 'styled', title: 'Styled Components' },
]

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <StyledSkills id={'skills'}>
      <Container>
        <SectionTitle>
          {/*Skills*/}
          {t('title', { ns: 'skills' })}
        </SectionTitle>
        <SkillsWrapper>
          <FlexWrapper gap={'50px'} justify={'center'} wrap={'wrap'}>
            <Fade damping={0.1} direction={'up'}>
              {skills.map(skill => (
                <Skill idIcon={skill.idIcon} key={skill.idIcon} title={skill.title} />
              ))}
            </Fade>
          </FlexWrapper>
        </SkillsWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section``

const SkillsWrapper = styled.div`
  padding-top: 50px;
  z-index: 10;
  background-color: rgba(12, 7, 10, 0.9);
  position: relative;
  -webkit-box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  -moz-box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  border-radius: 24px;
  @media ${theme.media.tablet} {
    padding-top: 20px;
  }
`
