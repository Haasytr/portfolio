import ReactFloaterJs from 'react-floaterjs'

import { Container, Apresentation, AboutMe, Technologys, Box } from './styles'

import cake from '../../assets/techs/cakephp.png'
import nest from '../../assets/techs/nest.jpg'
import node from '../../assets/techs/node.png'
import react from '../../assets/techs/react.png'
import next from '../../assets/techs/nextjs.png'
import php from '../../assets/techs/php.png'

export function Header() {
  return (
    <Container>
      <h1>Vínicius Santos</h1>
      <AboutMe>
        <Apresentation>
          <h1>Desenvolvedor FullStack</h1>
          <p>
            gosto do que faço, estou me especializando tanto em back quanto
            front end. Me comprometendo a continuar crescendo e buscando
            excelência
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
              <img src={php} />
            </Box>
            <Box>
              <img src={next} />
            </Box>

            <Box>
              <img src={cake} />
            </Box>
          </ReactFloaterJs>
        </Technologys>
      </AboutMe>
    </Container>
  )
}
