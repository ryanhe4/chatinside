import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700&display=swap');
        html {
          box-sizing: border-box;
        }
        * {
          box-sizing: inherit;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
            'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          margin: 0;
        }
        button,
        input {
          font-family: inherit;
        }
        button {
          padding: 0;
          background: none;
          border: none;
          outline: none;
        }
      `}
    />
  );
}
