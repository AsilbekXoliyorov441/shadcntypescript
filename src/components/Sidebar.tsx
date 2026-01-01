import { Building2, Globe, Hotel, LayoutDashboard, MapPinCheckIcon, MountainSnowIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Countries",
    path: "/countries",
    icon: Globe,
  },
  {
    title: "Cities",
    path: "/cities",
    icon: Building2,
  },
  {
    title: "Tours",
    path: "/tours",
    icon: MountainSnowIcon,
  },
  {
    title: "Hotels",
    path: "/hotels",
    icon: Hotel,
  },
  {
    title: "Destinations",
    path: "/destinations",
    icon: MapPinCheckIcon,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 fixed top-0 left-0 bg-white z-10 h-full border-r">
      <div className="p-4 font-bold text-lg border-b">Admin Panel</div>

      <nav className="p-2 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
                 ${
                   isActive
                     ? "bg-primary text-primary-foreground"
                     : "hover:bg-muted"
                 }`
              }
            >
              <Icon size={18} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
