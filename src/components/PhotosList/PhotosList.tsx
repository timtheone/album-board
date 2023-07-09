import { List } from "react-admin";
import { useParams } from "react-router-dom";

import { RecordContextProvider, useListContext } from "react-admin";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export const PhotosList = () => {
  const { albumId } = useParams();
  return (
    <List
      resource="photos"
      filter={{ albumId }}
      sort={{ field: "name", order: "ASC" }}
      perPage={20}
      pagination={false}
      component="div"
      actions={false}
    >
      <PhotosGrid />
    </List>
  );
};

const PhotosGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ marginTop: "1em" }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Grid key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
            <Card>
              <CardMedia image={record.thumbnailUrl} sx={{ height: 140 }} />
              <CardContent sx={{ paddingBottom: "0.5em" }}>
                <Typography variant="h6" component="h2" align="center">
                  {record.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </RecordContextProvider>
      ))}
    </Grid>
  );
};
