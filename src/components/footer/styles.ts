import { styled } from '@stitches/react'

export const Container = styled('div', {
  background: '$gray_100',
  padding: '3rem 1rem 0 1rem',
})

export const AboutMe = styled('div', {
  padding: '1rem 0',
})

export const Contact = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Title = styled('h1', {
  textAlign: 'center',
  textTransform: 'uppercase',
})

export const Grid = styled('div', {
  display: 'flex',

  [`@media (max-width: 1080px)`]: {
    flexDirection: 'column',
  },
})

export const Box = styled('div', {
  padding: '2rem',
  transition: 'scale 0.2s',
})

export const Button = styled('a', {
  color: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '$lg',
  background: '$gray_300',
  padding: '1rem',
  borderRadius: 50,

  '> svg': {
    marginRight: '0.25rem',
  },
})
