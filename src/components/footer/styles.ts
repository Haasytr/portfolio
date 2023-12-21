import { styled } from '@stitches/react'

export const Container = styled('div', {
  color: '#fff',
  height: '80vh',
  background:
    'linear-gradient(180deg, hsla(243, 96%, 56%, 1) 6%, hsla(196, 97%, 65%, 1) 100%);',
})

export const Navigation = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 2rem',
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
  padding: '2rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
})

export const Apresentation = styled('div', {
  maxWidth: 500,

  '> h1': {
    padding: '2rem 0',
    fontSize: '4em',
    color: '$orange_400',
  },

  '> p': {
    fontSize: '$lg',
    lineHeight: '1.6',
    textAlign: 'center',
  },
})

export const Technologys = styled('div', {
  width: '40%',
  '> div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

export const Box = styled('div', {
  padding: '2rem',
  transition: 'scale 0.2s',
  '&:hover': {
    scale: 1.3,
  },
  '> img': {
    width: 180,
    height: 180,
  },
})
