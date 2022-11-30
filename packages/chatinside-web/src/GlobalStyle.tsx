import { css, Global } from '@emotion/react'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
  )
}
