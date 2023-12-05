import { useAuth } from '../../../providers';
import { LoginBubble, Sidebar } from '../../common';
import classes from './SidebarLayout.module.scss';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      {user ? (
        <main>{children}</main>
      ) : (
        <main>
          <LoginBubble />
        </main>
      )}
    </div>
  );
};
