import { render } from '@testing-library/react'
import AuthForm from './AuthForm'

describe('AuthForm', () => {
  it('renders task', () => {
    const { container } = render(<AuthForm />)
  })
})
