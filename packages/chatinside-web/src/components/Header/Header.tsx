import styled from '@emotion/styled'
import { colors } from 'lib/colors'

interface Props {
  title?: React.ReactNode
}

export default function Header({ title }: Props) {
  return <Block>{title}</Block>
}

const Block = styled.header`
  height: 56px;
  border-bottom: 1px solid ${colors.gray0};
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
