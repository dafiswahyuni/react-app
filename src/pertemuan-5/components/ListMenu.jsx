import { FaClipboardList } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { MdDashboard, MdOutlinePeopleOutline } from "react-icons/md";

export default function Listmenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li
          id="menu-1"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <MdDashboard className="mr-4 text-xl" />
          <span>Dashboard</span>
        </li>
        <li
          id="menu-2"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <FaClipboardList className="mr-4 text-xl" />
          <span>Orders</span>
        </li>
        <li
          id="menu-3"
          className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
        >
          <MdOutlinePeopleOutline className="mr-4 text-xl" />
          <span>Customers</span>
        </li>
      </ul>
    </div>
  );
}
