import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '2rem 0',

  '> h1': {
    padding: '2rem',
  },
})

export const ProjectsList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  justifyItems: 'center',
})

export const Box = styled('a', {
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  maxWidth: 350,
  transition: '0.1s',
  padding: '2rem',

  '&:hover': {
    background: '$gray_300',
  },

  borderRadius: 5,
  '> img': {
    width: '100%',
    height: 300,
  },
})

export const Description = styled('div', {
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  '> p': {
    fontSize: '$lg',
  },
  '> h3': {
    color: '$orange_400',
    margin: '0.5rem 0',
  },
})

export const CardTitle = styled('h2', {
  width: '100%',
  fontSize: '$lg',
  textTransform: 'uppercase',
  textAlign: 'center',
})

export const TagsList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  margin: '0.5rem 0',
  gap: '0.5rem',
})

export const Tag = styled('p', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  height: 30,
  minWidth: 100,
  padding: '0 0.5rem',
  textAlign: 'center',
  borderRadius: 5,

  backgroundColor: '$green_700',
})
