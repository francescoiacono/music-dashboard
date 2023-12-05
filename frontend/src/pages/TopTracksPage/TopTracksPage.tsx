import { TopChart } from '../../components/common';
import { SidebarLayout } from '../../components/layouts';

// TODO: Fix Chart Item stuff

export const TopTracksPage = () => {
  return (
    <SidebarLayout>
      <h2>Top Tracks Page</h2>
      <TopChart type='tracks' />
    </SidebarLayout>
  );
};
