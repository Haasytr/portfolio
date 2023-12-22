import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Tag from '../../../../components/tag'
import {
  Container,
  Box,
  ProjectsList,
  Description,
  CardTitle,
  TagsList,
} from './styles'

import maps from '../../../../assets/projects/maps.png'
import recipes from '../../../../assets/projects/recipes.png'
import shop from '../../../../assets/projects/shop.png'

export function Projects() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        spacing: 20,
      },
      mode: 'free',
      breakpoints: {
        '(min-width: 1080px)': {
          disabled: true,
        },
      },
    },
    [
      (slider) => {
        let timeout: any
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <Container>
      <h1>Alguns de meus ultimos projetos</h1>

      <ProjectsList ref={sliderRef} className="keen-slider">
        <Box
          className="keen-slider__slide"
          href="https://github.com/Haasytr/backendWithPrisma"
          target="_blank"
        >
          <CardTitle>GymPass</CardTitle>
          <img src={maps} />
          <Description>
            <p>
              Criação de um sistema semelhante ao gym pass, onde usuarios podem
              fazer check-in em academias próximas
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag title="NodeJS" />
              <Tag title="Typescript" />
            </TagsList>
          </Description>
        </Box>
        <Box
          className="keen-slider__slide"
          href="https://recipes-site-l4dg-k8s87lxs6-haasytr.vercel.app/"
          target="_blank"
        >
          <CardTitle>Recipes</CardTitle>
          <img src={recipes} />
          <Description>
            <p>
              Site de pesquisa com diversas receitas, incluindo ingredientes e
              modos de preparo. Utilizando api externa como referência.
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag title="ReactJS" />
              <Tag title="NextJS" />
              <Tag title="Typescript" />
            </TagsList>
          </Description>
        </Box>
        <Box
          href="https://github.com/Haasytr/igniteShop/tree/main"
          target="_blank"
          className="keen-slider__slide"
        >
          <CardTitle>Ignite Shop</CardTitle>
          <img src={shop} />
          <Description>
            <p>
              Criação de uma loja online usando conceitos do NextJS, como SSR e
              SSG. Utilizando um stripe para simular pagamento.
            </p>
            <h3>Tecnologias usadas</h3>
            <TagsList>
              <Tag title="ReactJS" />
              <Tag title="NextJS" />
              <Tag title="Typescript" />
            </TagsList>
          </Description>
        </Box>
      </ProjectsList>
    </Container>
  )
}
