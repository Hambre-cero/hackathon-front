import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import TestProvider from '../../providers/TestProvider'
import Landing from './Landing'

describe('Test on <Landing />', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <Landing />
      </TestProvider>
    )
  })

  test('Should render a phrase', () => {
    const phrase = screen.getByText(/Easy Donate/i)
    expect(phrase).toHaveTextContent('Easy Donate')
  })

  test('Should render "Donate!" in the button', () => {
    const textButton = screen.getByText('Donate!')
    expect(textButton).toHaveTextContent('Donate!')
  })

  test('Should have a background image', () => {
    const image = screen.getByAltText(/Background/i)
    expect(image).toBeInTheDocument()
  })

  test('Should have login link', () => {
    const loginText = screen.getByText(/Login/i)
    expect(loginText).toBeInTheDocument()
  })
})
