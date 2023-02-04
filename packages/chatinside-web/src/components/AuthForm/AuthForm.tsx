import styled from '@emotion/styled'
import Input from 'components/Input/Input'
interface AuthFormProps {}

function AuthForm({}: AuthFormProps) {
  return (
    <Block>
      <InputGroup>
        <Input placeholder='id' />
        <Input placeholder='password' />
      </InputGroup>
    </Block>
  )
}
export default AuthForm

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
