import { Outlet } from "react-router-dom";
import { useAuth, useSidebar } from "../../../providers";
import { LoginBubble, Sidebar } from "../../common";
import classes from "./SidebarLayout.module.scss";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const { isOpen: isSidebarOpen } = useSidebar();

  const mainClasses = `${!isSidebarOpen ? classes.closed : ""}`;

  return (
    <div className={classes.wrapper}>
      {user ? (
        <>
          <Sidebar />
          <main className={mainClasses}>{children}</main>
          <Outlet />
        </>
      ) : (
        <main className={classes.noAuthWrapper}>
          <LoginBubble />
        </main>
      )}
    </div>
  );
};
