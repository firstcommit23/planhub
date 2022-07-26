import Header from '@/components/Header';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default DefaultLayout;
