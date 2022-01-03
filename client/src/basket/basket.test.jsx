import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Basket from './basket'

test('renders', () => {
  const mockData = {
    a: { label: 'AAA' },
    b: { label: 'BBB' },
    x: { label: 'XXX' }
  }

  render(<Basket ingredients={mockData} />)

  const button = screen.getByText('Open Basket')
  fireEvent.click(button)
  screen.getByText('AAA')
  screen.getByText('BBB')
  screen.getByText('XXX')
})
