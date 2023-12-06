import { SidebarLayout } from "../../components/layouts";
import { Folders } from "./components/Folders/Folders";

export const Dashboard = () => {
  return (
    <SidebarLayout>
      <h1>Dashboard</h1>
      <Folders />
    </SidebarLayout>
  );
};
