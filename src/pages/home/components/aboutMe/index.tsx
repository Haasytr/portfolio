import Tag from '../../../../components/tag'
import { Container, Title, Description, TagsList } from './styles'

export function AboutMe() {
  return (
    <Container>
      <Description>
        <Title>Sobre mim</Title>
        <p>
          Começei a programar com 14 anos, tendo começado com PHP e agora
          seguindo o lado javascript da força. Atualmente estou em cursando ADS
          na FATEC Itapetiniga, em relação em stack tenho estudado mais back end
          no momento,mesmo assim estou confiante que posso desempenhar em ambos
          ends.
        </p>
        <div>
          <h1>Aqui algumas das minhas tecnologias mais usadas</h1>

          <TagsList>
            <Tag title="ReactJS" />
            <Tag title="NodeJS" />
            <Tag title="NextJS" />
            <Tag title="ViteJS" />
            <Tag title="NestJS" />
            <Tag title="Docker" />
            <Tag title="Typescript" />
          </TagsList>
        </div>
      </Description>
    </Container>
  )
}
