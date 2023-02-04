import { render } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders task', () => {
    const { container, getByPlaceholderText } = render(
      <Input placeholder='Input' />
    )

    const input = getByPlaceholderText('Input')
    expect(input).toHaveAttribute('placeholder', 'Input')
    // expect(container).toBeVisible
  })
})
