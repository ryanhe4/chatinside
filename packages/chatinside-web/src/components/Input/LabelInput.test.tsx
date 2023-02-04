import { render } from '@testing-library/react'
import LabelInput from './LabelInput'

describe('LabelInput', () => {
  it('renders task', () => {
    const { container } = render(<LabelInput />)
    expect(container).toHaveTextContent('LabelInput')
  })
})
