import { memo, useMemo } from "react";
import { useAuth, useSidebar } from "../../../providers";
import { UserInformation } from "./UserInformation";
import { LoginButton } from "../LoginButton/LoginButton";
import { NavigationLinks } from "./NavigationLinks/NavigationLinks";
import classes from "./Sidebar.module.scss";

/**
 * Sidebar component is used to display the user information and navigation links.
 *
 * The sidebar is displayed by default on large screens and a button is displayed to toggle the sidebar.
 * The sidebar is hidden by default on small screens and a button is displayed to toggle the sidebar.
 */

export const Sidebar = memo(() => {
  const { user } = useAuth();
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
      {!isOpen && (
        <span
          onClick={toggleSidebar}
          className={`material-symbols-outlined ${classes.openButton}`}
        >
          chevron_right
        </span>
      )}
      <aside className={sidebarClass}>
        <span
          className={`material-symbols-outlined ${classes.closeButton}`}
          onClick={toggleSidebar}
        >
          chevron_left
        </span>

        {user ? <UserInformation profile={user} /> : <LoginButton />}
        <NavigationLinks />
      </aside>
    </>
  );
});
