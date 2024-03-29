import { Navbar } from '../../home';

interface Props {
  children: React.ReactNode
}

export default function HomePage( { children }: Props ) {

  return (
    <div>
      <Navbar />
      { children }
    </div>
  );
}