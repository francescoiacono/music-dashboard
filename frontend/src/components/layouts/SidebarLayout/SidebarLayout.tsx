import { useAuth } from "../../../providers";
import { LoginBubble, Sidebar } from "../../common";
import classes from "./SidebarLayout.module.scss";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className={classes.wrapper}>
      {user ? (
        <>
          <Sidebar />
          <main>{children}</main>
        </>
      ) : (
        <main className={classes.noAuthWrapper}>
          <LoginBubble />
        </main>
      )}
    </div>
  );
};
