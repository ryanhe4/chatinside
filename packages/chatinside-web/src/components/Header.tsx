import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import { Vercel } from './vectors'

export default function Header() {
  return (
    <Block>
      <Vercel />
    </Block>
  )
}

const Block = styled.header`
  height: 56px;
  border-bottom: 1px solid ${colors.gray0};
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 84px;
    height: 17px;
  }
`
