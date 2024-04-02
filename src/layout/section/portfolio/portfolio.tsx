import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { Container, FlexWrapper, SectionTitle } from '@/components'
import { Project } from '@/layout/section/portfolio/project/project'
import styled from 'styled-components'

import imgCards from '../../../assets/portfolio/cards.webp'
import imgTasks from '../../../assets/portfolio/todoList.webp'

export const Portfolio = () => {
  const { t } = useTranslation()

  const projects = [
    {
      code: 'https://github.com/Belom7/project_educational_cards',
      demo: 'https://it-inc-cards.vercel.app',
      description: `${t('descriptionCards', { ns: 'portfolio' })}`,
      name: 'Learning Platform',
      photo: imgCards,
    },
    {
      code: 'https://github.com/GennadiiPaninov/todoList',
      demo: 'https://github.com/GennadiiPaninov/todoList',
      description: `${t('descriptionCheckFlow', { ns: 'portfolio' })}`,
      name: 'Check Flow',
      photo: imgTasks,
    },
  ]

  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'portfolio' })}</SectionTitle>
        <Fade>
          <FlexWrapper align={'stretch'} gap={'20px'} justify={'space-evenly'} wrap={'wrap'}>
            {projects.map(project => (
              <Project
                code={project.code}
                demo={project.demo}
                description={project.description}
                key={project.name}
                name={project.name}
                photo={project.photo}
              />
            ))}
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  position: relative;
`
