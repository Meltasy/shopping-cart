
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop'

describe('Shop component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    )
  })

  it('renders the Shop component', () => {
    screen.debug()
  })

})