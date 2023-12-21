import {
  Container,
  Box,
  ProjectsList,
  Description,
  CardTitle,
  Tag,
  TagsList,
} from './styles'

import node from '../../assets/techs/node.png'

export function Projects() {
  return (
    <Container>
      <h1>Alguns de meus ultimos projetos</h1>

      <ProjectsList>
        <Box
          href="https://github.com/Haasytr/backendWithPrisma"
          target="_blank"
        >
          <CardTitle>GymPass</CardTitle>
          <img src="#" />
          <Description>
            <p>
              Criação de um sistema semelhante ao gym pass, onde usuarios podem
              fazer check-in em academias próximas
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag>NodeJS</Tag>
              <Tag>Typescript</Tag>
              <Tag>Typescript</Tag>
            </TagsList>
          </Description>
        </Box>
        <Box>
          <CardTitle>GymPass</CardTitle>
          <img src="#" />
          <Description>
            <p>
              Criação de um sistema semelhante ao gym pass, onde usuarios podem
              fazer check-in em academias próximas
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag>NodeJS</Tag>
            </TagsList>
          </Description>
        </Box>
        <Box>
          <CardTitle>GymPass</CardTitle>
          <img src="#" />
          <Description>
            <p>
              Criação de um sistema semelhante ao gym pass, onde usuarios podem
              fazer check-in em academias próximas
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag>NodeJS</Tag>
            </TagsList>
          </Description>
        </Box>
      </ProjectsList>
    </Container>
  )
}
