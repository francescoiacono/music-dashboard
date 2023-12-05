import { Router } from 'express';
import { SpotifyAuthController, ArtistsController } from '../../controllers';

const routes = Router();

routes.get(
  '/top',
  SpotifyAuthController.checkAccessToken,
  ArtistsController.getTopArtists
);

routes.get(
  '/:id',
  SpotifyAuthController.checkAccessToken,
  ArtistsController.getArtist
);

routes.get(
  '/:id/albums',
  SpotifyAuthController.checkAccessToken,
  ArtistsController.getArtistAlbums
);

routes.get(
  '/:id/top-tracks',
  SpotifyAuthController.checkAccessToken,
  ArtistsController.getArtistTopTracks
);

export { routes };
