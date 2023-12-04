import { Sidebar } from "../../common";
import classes from "./SidebarLayout.module.scss";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
