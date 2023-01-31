import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
      bg-white dark:bg-gray-900 text-secondary shadow-lg"
    >
      <SideBarIcon icon={<FaFire size={28} />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size={28} />} />
      <SideBarIcon icon={<BsFillLightningFill size={28} />} />
      <SideBarIcon icon={<FaPoo size={28} />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size={28} />} />
    </div>
  );
};
// Create a component for each icon and pass the icon as a prop
// The icon argument is type react-icon from react-icons
// Also create a text prop for the tooltip with and lightbulb icon

interface SideBarIconProps {
  icon: React.ReactNode;
  text?: string;
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }: SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr"></hr>;

export default SideBar;
