import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { NavbarItem } from './NavbarItem';

interface Props { }

export const metadata = {
  title: "Market List App",
  description: "Market List App",
};
export const Navbar = () => {
  return (
    <nav className="flex flex-col text-center items-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 shadow sm:items-baseline w-full bg-blue-950">

      <Link href='/' className="flex items-center">
        <FaCartShopping color="#fff" className="h-10 w-10 mr-2" />

        <div>
          <h1 className="text-2xl no-underline font-bold text-white">
            Market List App
          </h1>
          <span className="text-xs text-white">by edcan-dev</span>
        </div>
      </Link>

      <div className=" self-center">
        <div className="h-10 flex">
          <NavbarItem path="/about" title="Acerca de" />

          <button className="bg-white text-md text-black 
          align-middle flex items-center mr-2 px-5 rounded-lg"  
          >
            Logout
          </button>
        </div>
      </div>

    </nav>
  );
};
