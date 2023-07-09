import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import { PhotosList } from "./components/PhotosList/PhotosList";
import { AlbumsList } from "./components/AlbumsList/AlbumsList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="albums" list={AlbumsList}>
      <Route path="/:albumId/photos" element={<PhotosList />} />
    </Resource>
  </Admin>
);
