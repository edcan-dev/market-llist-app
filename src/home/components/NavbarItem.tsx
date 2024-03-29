"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  title: string
  path: string
}


export const NavbarItem = ( { path, title }: Props) => {

  const currentPath = usePathname();


  return (
    <Link
      href={ path  }
      className={`text-md align-middle flex items-center mr-2 px-5 
      ${ path == currentPath ? 'text-blue-400' : 'text-white' }`}
      >
      { title }
    </Link>
  )
};