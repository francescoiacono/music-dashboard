import { memo, useMemo } from "react";
import { useSidebar } from "../../../providers";
import { UserInformation } from "./UserInformation";
import { NavigationLinks } from "./NavigationLinks/NavigationLinks";
import { IconButton } from "../IconButton/IconButton";
import classes from "./Sidebar.module.scss";

/**
 * Sidebar component is used to display the user information and navigation links.
 *
 * The sidebar is displayed by default on large screens and a button is displayed to toggle the sidebar.
 * The sidebar is hidden by default on small screens and a button is displayed to toggle the sidebar.
 */

export const Sidebar = memo(() => {
  const { isOpen, toggleSidebar, isLargeScreen } = useSidebar();

  /**
   * useMemo is used to avoid re-rendering the component when the sidebar is open
   * and the screen size changes.
   */

  const sidebarClass = useMemo(() => {
    const sizeClass = isLargeScreen
      ? classes.wrapperLarge
      : classes.wrapperSmall;
    const openClass = isOpen ? classes.open : classes.close;
    return `${sizeClass} ${openClass}`;
  }, [isLargeScreen, isOpen]);

  return (
    <>
      <aside className={sidebarClass}>
        <div>
          <UserInformation />
          <NavigationLinks />
        </div>
        <div className={classes.long}>
          <IconButton
            onClick={toggleSidebar}
            className={classes.sidebarButton}
            icon="chevron_left"
          />
        </div>
      </aside>
    </>
  );
});
