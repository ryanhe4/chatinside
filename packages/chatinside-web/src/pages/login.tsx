import styled from '@emotion/styled'
import AuthForm from 'components/AuthForm/AuthForm'
import Header from 'components/Header/Header'

export default function Login() {
  return (
    <Page>
      <Header title='Login' />
      <AuthForm />
    </Page>
  )
}

const Page = styled.div``
