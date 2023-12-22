import { Container, AboutMe, Box, Title, Contact, Button, Grid } from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Title>Contato</Title>
      <AboutMe>
        <Contact>
          <Grid>
            <Box>
              <Button href="https://github.com/Haasytr">
                <FaGithub />
                Github
              </Button>
            </Box>
            <Box>
              <Button href="https://www.linkedin.com/in/vinicius-oliveira-a666941b1/">
                <FaLinkedin />
                LinkedIn
              </Button>
            </Box>
            <Box>
              <Button href="https://github.com/Haasytr/portfolio">
                Repositório deste projeto
              </Button>
            </Box>
          </Grid>
          <p>
            Irei atualizar este projeto sempre que tiver alguma ideia legal, se
            quiser compartilhar alguma por favor entre em contato.
          </p>
        </Contact>
      </AboutMe>
    </Container>
  )
}
