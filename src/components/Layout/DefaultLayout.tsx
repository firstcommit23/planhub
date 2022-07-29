import styled from '@emotion/styled';
import Header from '@/components/Header';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

const Container = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.5rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
export default DefaultLayout;
