import { Container } from './styles'

interface TagProps {
  title: string
}

export default function Tag({ title }: TagProps) {
  return <Container>{title}</Container>
}
