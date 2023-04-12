import styled from '@emotion/styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Page>
      <Header title={'chatin-side'} />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;

  padding: 16px;
  height: 100%;
`;

export default Layout;
