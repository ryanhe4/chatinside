import styled from '@emotion/styled'
import { colors } from 'lib/colors'
interface Props extends React.HTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <StyledInput {...props} />
}
export default Input

const StyledInput = styled.input`
  height: 48px;
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${colors.gray5};
  &:focus {
    border: 1px solid ${colors.primary};
  }
`
