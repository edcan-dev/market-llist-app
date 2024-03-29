"use client";

import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";
import { deleteMarketListById } from "..";
import Swal from "sweetalert2";
import Link from "next/link";

interface Props {
  list: MarketList;
}

export const MarketListsItem = ({ list }: Props) => {
  const router = useRouter();

  const handleListDelete = (ev: any) => {
    ev.preventDefault();

    Swal.fire({
      title: "Estás seguro?",
      text: "Esta acción es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMarketListById(list.id);
        router.refresh();

        /* Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }); */
      }
    });
  };

  return (
    <Link href={`/list/${ list.id }`}>
      <li
        className="flex justify-between mb-2 h-12 items-center text-lg rounded 
            border bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
      >
        <span className="ml-2">{list.name}</span>

        <button
          onClick={handleListDelete}
          className="flex items-center justify-center rounded h-8 w-8 bg-red-800 hover:bg-red-700 transition-all mr-2"
        >
          <FaTrash color="white" />
        </button>
      </li>
    </Link>
  );
};
