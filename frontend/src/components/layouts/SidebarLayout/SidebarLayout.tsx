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
        <main
          style={{
            margin: "0",
            height: "100vh",
            background: "radial-gradient(circle, #1db954, #191414)",
          }}
        >
          <LoginBubble />
        </main>
      )}
    </div>
  );
};
