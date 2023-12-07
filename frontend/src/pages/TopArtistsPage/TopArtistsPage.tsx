import { TopChart } from "../../components/common";
import { SidebarLayout } from "../../components/layouts";
import { ChartTypes } from "../../types";

export const TopArtistsPage = () => {
  return (
    <SidebarLayout>
      <h2>Top Artists</h2>
      <TopChart type={ChartTypes.Artists} />
    </SidebarLayout>
  );
};
