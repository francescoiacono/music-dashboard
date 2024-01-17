import {
  ArtistPage,
  NotFoundPage,
  TopArtistsPage,
  TopTracksPage,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/top-artists",
    element: <TopArtistsPage />,
  },
  {
    path: "/top-tracks",
    element: <TopTracksPage />,
  },
  {
    path: "/artists/:id",
    element: <ArtistPage />,
    children: [
      {
        path: "related",
        element: <p>Hello</p>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
