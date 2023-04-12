import { render } from '@testing-library/react';
import PostContainer from './PostContainer';

describe('PostContainer', () => {
  it('renders task', () => {
    const { container } = render(<PostContainer />);
    expect(container).toHaveTextContent('포스트내용');
  });
});
