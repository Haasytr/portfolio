import {
  Container,
  Nav,
  Button,
  Navigation,
  Apresentation,
  AboutMe,
  Technologys,
  Box,
} from './styles'

import cake from '../../assets/techs/cakephp.jpg'
import nest from '../../assets/techs/nest.jpg'
import node from '../../assets/techs/node.png'
import react from '../../assets/techs/react.png'
import ReactFloaterJs from 'react-floaterjs'

export function Footer() {
  return (
    <Container>
      <Navigation>
        <h1>Vínicius Santos</h1>
        <Nav>
          <Button>Sobre mim</Button>
          <Button>Tecnologias</Button>
          <Button>Ultimos projetos</Button>
        </Nav>
      </Navigation>
      <AboutMe>
        <Apresentation>
          <h1>Desenvolvedor FullStack</h1>
          <p>
            Amo oque faço,sendo especializado tanto em back quanto front end.
            Essas são algumas da tecnologias que eu já utilizei
          </p>
        </Apresentation>

        <Technologys>
          <ReactFloaterJs>
            <Box>
              <img src={nest} />
            </Box>
            <Box>
              <img src={react} />
            </Box>

            <Box>
              <img src={node} />
            </Box>
            <Box>
              <img src={nest} />
            </Box>
            <Box>
              <img src={react} />
            </Box>

            <Box>
              <img src={node} />
            </Box>
          </ReactFloaterJs>
        </Technologys>
      </AboutMe>
    </Container>
  )
}
