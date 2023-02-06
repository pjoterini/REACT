import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoProps } from "./Feed";
import Videos from "./Videos";

function SearchFeed() {
  const [videos, setVideos] = useState<VideoProps[] | null>(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span
          style={{
            color: "#F31503",
            marginRight: "1rem",
          }}
        >
          Search results for:
        </span>
        {searchTerm}
        <span
          style={{
            color: "#F31503",
            marginLeft: "1rem",
          }}
        >
          videos
        </span>
      </Typography>
      <Videos videos={videos} direction="row" />
    </Box>
  );
}

export default SearchFeed;
