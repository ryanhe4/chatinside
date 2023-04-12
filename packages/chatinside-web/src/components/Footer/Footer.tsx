import styled from '@emotion/styled';
import { colors } from 'lib/colors';
interface Props {}

function Footer({}: Props) {
  return <StyledFooter>Footer</StyledFooter>;
}

const StyledFooter = styled.footer`
  height: 56px;
  border-top: 1px solid ${colors.gray0};
  display: flex;
`;

export default Footer;
