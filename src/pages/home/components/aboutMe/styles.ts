import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '2rem 0',
  borderBottom: '5px solid $gray_100',
})

export const Description = styled('div', {
  padding: '2rem',
  '> p': {
    fontSize: '$lg',
    lineHeight: '1.6',
    margin: '2rem 0',
  },
})

export const Title = styled('h1', {
  color: '$orange_600',
  textTransform: 'uppercase',
})

export const Grid = styled('div', {
  display: 'flex',
})

export const TagsList = styled('div', {
  margin: '1rem 0',
  display: 'flex',
  gap: '0.5rem',

  [`@media (max-width: 1080px)`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [`@media (max-width: 300px)`]: {
    gridTemplateColumns: '1fr',
  },
})
