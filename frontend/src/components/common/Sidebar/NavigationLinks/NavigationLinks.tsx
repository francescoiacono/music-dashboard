import { Link } from "react-router-dom";
import { useSidebar } from "../../../../providers";
import classes from "./NavigationLinks.module.scss";

const links = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Top Artists",
    path: "/top-artists",
  },
  {
    name: "Top Tracks",
    path: "/top-tracks",
  },
];

export const NavigationLinks = () => {
  const { isOpen, isLargeScreen, toggleSidebar } = useSidebar();

  const handleClick = () => {
    if (isOpen && !isLargeScreen) {
      toggleSidebar();
    }
  };

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.links}>
        {links.map((link) => (
          <li key={link.name}>
            <Link onClick={handleClick} to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
