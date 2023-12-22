import { styled } from '@stitches/react'

export const Container = styled('div', {
  color: '#fff',
  height: '80vh',
  background: 'linear-gradient(0, $blue_700 6%, $blue_300 100%);',

  '> h1': {
    padding: '2rem',

    [`@media (max-width: 1080px)`]: {
      textAlign: 'center',
    },
  },
  [`@media (max-width: 1080px)`]: {
    height: 'inherit',
    padding: '2rem 0',
  },
})

export const Nav = styled('nav', {})

export const Button = styled('button', {
  all: 'unset',

  padding: '2rem',
  transition: '0.2s',

  fontSize: '$lg',
  '&:hover': {
    scale: 1.3,
  },
})

export const AboutMe = styled('div', {
  padding: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
})

export const Apresentation = styled('div', {
  maxWidth: 500,

  '> h1': {
    padding: '2rem 0',
    fontSize: '$2xl',
    color: '$orange_400',
  },

  '> p': {
    fontSize: '$lg',
    lineHeight: '1.6',
  },

  [`@media (max-width: 1080px)`]: {
    padding: '0 2rem',
    textAlign: 'center',
  },
})

export const Technologys = styled('div', {
  width: '40%',
  '> div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  [`@media (max-width: 1380px)`]: {
    display: 'none',
  },
})

export const Box = styled('div', {
  padding: '2rem',
  transition: 'scale 0.2s',
  '&:hover': {
    scale: 1.3,
  },
  '> img': {
    width: '100%',
    height: '100%',
  },
})
