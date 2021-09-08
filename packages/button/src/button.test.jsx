import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button.jsx'

it('renders', () => {
  const spyOnClick = jest.fn()
  render(<Button onClick={spyOnClick}>BUTTON TEXT</Button>)

  const subject = screen.getByText('BUTTON TEXT')
  expect(subject).toBeInTheDocument()
  fireEvent.click(subject, { target: 'JavaScript' })
  expect(spyOnClick).toBeCalled()
})
