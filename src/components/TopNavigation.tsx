"use client";

import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size={24} className="top-navigation-icon" />
      ) : (
        <FaMoon size={24} className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size={24} className="text-secondary my-auto" />
  </div>
);

const BellIcon = () => <FaRegBell size={24} className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size={24} className="top-navigation-icon" />
);
const HashtagIcon = () => (
  <FaHashtag size={24} className="top-navigation-icon" />
);
const Title = () => <h5 className="top-navigation-title">Tailwind-css</h5>;

export default TopNavigation;
