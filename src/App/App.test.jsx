import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

describe('App component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  it('renders the App component', () => {
    screen.debug()
  })

  it('renders the main section', () => {
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
