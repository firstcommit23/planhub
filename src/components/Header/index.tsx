import Link from 'next/link';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <NavbarHeader>
          <Link href="/">
            <NavbarTitle>
              PlanHub
              <small>BETA</small>
            </NavbarTitle>
          </Link>
        </NavbarHeader>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #383d40;
  border-color: #e7e7e7;
  border-width: 0 0 1px;
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
  border: 1px solid transparent;
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 768px;
  }
`;

const NavbarHeader = styled.div`
  margin-left: -30px;
`;

const NavbarTitle = styled.a`
  color: #fff;
  font-size: 22px;
  float: left;
  height: 50px;
  padding: 15px;
  line-height: 20px;
  cursor: pointer;

  small {
    display: inline-block;
    padding: 1px 3px;
    margin-left: 2px;
    margin-top: -15px;
    font-size: 11px;
    font-weight: 400;
    color: #aaa;
    line-height: 12px;
    vertical-align: middle;
  }
`;
export default Header;
