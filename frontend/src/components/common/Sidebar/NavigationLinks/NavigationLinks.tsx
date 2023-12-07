import { NavLink } from "react-router-dom";
import { useSidebar } from "../../../../providers";
import classes from "./NavigationLinks.module.scss";
import { IconButton } from "../../IconButton/IconButton";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: "dashboard",
  },
  {
    name: "Top Artists",
    path: "/top-artists",
    icon: "artist",
  },
  {
    name: "Top Tracks",
    path: "/top-tracks",
    icon: "music_note",
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
            <NavLink
              className={classes.link}
              onClick={handleClick}
              to={link.path}
            >
              {({ isActive }) => (
                <>
                  <IconButton className={classes.icon} icon={link.icon} />
                  <span className={isActive ? classes.active : ""}>
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
