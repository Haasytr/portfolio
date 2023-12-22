import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '2rem 0',

  '> h1': {
    color: '$orange_600',
    padding: '2rem',
  },
})

export const ProjectsList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',

  [`@media (max-width: 1080px)`]: {
    gridTemplateColumns: '1fr',
  },
})

export const Box = styled('a', {
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  maxWidth: 350,
  transition: '0.2s',
  padding: '2rem',

  '&:hover': {
    background: '$gray_300',
  },

  '&:hover > img': {
    opacity: 0.8,
  },

  borderRadius: 5,
  '> img': {
    objectFit: 'cover',
    width: '100%',
    height: 300,
    borderRadius: 5,
  },

  [`@media (max-width: 1080px)`]: {
    padding: '0',
  },
})

export const Description = styled('div', {
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  '> p': {
    fontSize: '$lg',
    minHeight: 100,
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

  [`@media (max-width: 1080px)`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})
