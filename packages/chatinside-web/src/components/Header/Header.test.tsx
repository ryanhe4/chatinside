import { render } from '@testing-library/react'
import Header from './Header'

test('Header', () => {
  const titleText = 'title'
  const { container } = render(<Header title={titleText} />)

  expect(container).toHaveTextContent(titleText)
})
