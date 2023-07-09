import {
  ShowButton,
  Datagrid,
  Link,
  List,
  TextField,
  useRecordContext,
  TextInput,
} from "react-admin";

const PhotosRedirectButton = () => {
  const record = useRecordContext();

  return (
    <ShowButton
      component={Link}
      to={`/albums/${record.id}/photos`}
      color="primary"
      size="small"
    />
  );
};

const postFilters = [
  <TextInput key="id" label="Search" source="q" alwaysOn name="search" />,
];

export const AlbumsList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <PhotosRedirectButton />
    </Datagrid>
  </List>
);
