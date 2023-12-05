import { SidebarLayout } from '../../components/layouts';
import { useParams } from 'react-router-dom';
import { ArtistInfo } from './components';

export const ArtistPage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Artist ID not found</div>;
  }

  return (
    <SidebarLayout>
      <ArtistInfo id={id} />
    </SidebarLayout>
  );
};
