import { MdOutlinePeopleOutline } from "react-icons/md"; 
import { FaClipboardList } from "react-icons/fa"; 
import { RiDashboardFill } from "react-icons/ri";
import { BiError, BiUserCircle } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <Link
          id="menu-dashboard"
          to="/"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <RiDashboardFill className="mr-4 text-xl" />
          <span>Dashboard</span>
        </Link>

        <Link
          id="menu-orders"
          to="/orders"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <FaClipboardList className="mr-4 text-xl" />
          <span>Order</span>
        </Link>

        <Link
          id="menu-customers"
          to="/customers"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <MdOutlinePeopleOutline className="mr-4 text-xl" />
          <span>Customer</span>
        </Link>

        <Link
          id="menu-user"
          to="/user"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <BiUserCircle className="mr-4 text-xl" />
          <span>User</span>
        </Link>

        {/* Opsional: Halaman error */}
        <Link
          id="menu-400"
          to="/400"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-red-500 hover:bg-red-100"
        >
          <HiOutlineExclamationCircle className="mr-4 text-xl" />
          <span>Error 400</span>
        </Link>

        <Link
          id="menu-401"
          to="/401"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-red-500 hover:bg-red-100"
        >
          <HiOutlineExclamationCircle className="mr-4 text-xl" />
          <span>Error 401</span>
        </Link>

        <Link
          id="menu-403"
          to="/403"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-red-500 hover:bg-red-100"
        >
          <HiOutlineExclamationCircle className="mr-4 text-xl" />
          <span>Error 403</span>
        </Link>

        <Link
          id="menu-notfound"
          to="/notfound"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-red-500 hover:bg-red-100"
        >
          <BiError className="mr-4 text-xl" />
          <span>Not Found</span>
        </Link>
      </ul>
    </div>
  );
}
