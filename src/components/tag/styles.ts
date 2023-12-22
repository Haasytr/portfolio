import { styled } from '@stitches/react'

export const Container = styled('p', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  height: 30,
  minWidth: 100,
  padding: '0 0.5rem',
  textAlign: 'center',
  borderRadius: 5,

  backgroundColor: '$green_700',

  [`@media (max-width: 1080px)`]: {
    margin: '0 0.75rem',
  },
})
