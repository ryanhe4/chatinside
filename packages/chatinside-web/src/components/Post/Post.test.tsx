import { render } from '@testing-library/react';
import Post from './Post';

describe('Post', () => {
  it('renders task', () => {
    const { container } = render(<Post />);
    expect(container).toHaveTextContent('포스트제목');
    expect(container).toHaveTextContent('포스트내용');
    expect(container).toHaveTextContent('포스트 날짜');
  });
});
