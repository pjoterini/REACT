import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFetchFromAPI, fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

export interface VideoProps {
  statistics?: {
    subscriberCount: string;
    viewCount: string;
    likeCount: string;
  };
  kind: string;
  id: { kind: string; videoId?: string; channelId?: string };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: { height: number; url: string; width: number };
      high: { height: number; url: string; width: number };
      medium: { height: number; url: string; width: number };
    };
    title: string;
  };
}

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<VideoProps[] | null>(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "3px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
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
    </Stack>
  );
}

export default Feed;
