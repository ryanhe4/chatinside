import styled from '@emotion/styled';
import { useMemo } from 'react';
import Post from './Post';

interface Props {}

function PostContainer({}: Props) {
  const postItem = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <>
      {postItem.map((item) => {
        return <Post key={item} />;
      })}
    </>
  );
}
export default PostContainer;
