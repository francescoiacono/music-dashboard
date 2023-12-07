import { TopChart } from "../../components/common";
import { SidebarLayout } from "../../components/layouts";
import { ChartTypes } from "../../types";

export const TopTracksPage = () => {
  return (
    <SidebarLayout>
      <h2>Top Tracks Page</h2>
      <TopChart type={ChartTypes.Tracks} />
    </SidebarLayout>
  );
};
