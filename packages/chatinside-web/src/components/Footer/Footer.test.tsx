import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders task', () => {
    const { container } = render(<Footer />);
    expect(container).toHaveTextContent('Footer');
  });
});
