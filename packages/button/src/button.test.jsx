import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

it('renders', () => {
  const spyOnClick = jest.fn()
  render(<Button onClick={spyOnClick}>BUTTON TEXT</Button>)

  screen.debug()

  const subject = screen.getByText('BUTTON TEXT')
  expect(subject).toBeInTheDocument()
  fireEvent.click(subject)
  expect(spyOnClick).toBeCalled()
})
