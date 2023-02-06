import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoProps } from "./Feed";
import Videos from "./Videos";

function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState<VideoProps | null>(null);
  const [videos, setVideos] = useState<VideoProps[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&releatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
        console.log(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" padding={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.id.channelId}`}>
                <Typography variant="h6" color="#fff">
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail &&
                    parseInt(
                      videoDetail.statistics?.viewCount!
                    ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail &&
                    parseInt(
                      videoDetail.statistics?.likeCount!
                    ).toLocaleString()}{" "}
                  updoots
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
