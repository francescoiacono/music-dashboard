import { TopChart } from '../../components/common';
import { SidebarLayout } from '../../components/layouts';

export const TopArtistsPage = () => {
  return (
    <SidebarLayout>
      <h2>Top Artists</h2>
      <TopChart type='artists' />
    </SidebarLayout>
  );
};
