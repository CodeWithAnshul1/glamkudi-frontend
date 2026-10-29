import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  {
    name: "My Profile",
    path: "/profile",
    icon: FiUser,
    end: true,
  },
  {
    name: "My Orders",
    path: "/profile/orders",
    icon: FiShoppingBag,
  },
  {
    name: "Wishlist",
    path: "/profile/wishlist",
    icon: FiHeart,
  },
  {
    name: "Saved Addresses",
    path: "/profile/addresses",
    icon: FiMapPin,
  },
  {
    name: "Change Password",
    path: "/profile/change-password",
    icon: FiLock,
  },
];

export default function ProfileSidebar({ onLogout }) {

  return (
    <aside className="h-fit w-full rounded-2xl border border-[#e9e3dc] bg-white p-5 shadow-sm md:w-[260px]">

      {/* Sidebar Heading */}
      <div className="mb-6 border-b border-[#e9e3dc] pb-5">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd5d3c]">
          Glamkudi
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-[#302723]">
          My Account
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage your account
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {menuItems.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#f7e9df] font-semibold text-[#bd5d3c]"
                  : "text-[#51443d] hover:bg-[#fff8f2] hover:text-[#bd5d3c]"
              }`
            }
          >
            <Icon size={19} />
            <span>{name}</span>
          </NavLink>
        ))}

        {/* Logout */}
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
        >
          <FiLogOut size={19} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}