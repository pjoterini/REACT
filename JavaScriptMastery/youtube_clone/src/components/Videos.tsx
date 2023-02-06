import { Box, Stack } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import React from "react";
import ChannelCard from "./ChannelCard";
import { VideoProps } from "./Feed";
import VideoCard from "./VideoCard";

interface VideosProps {
  videos: VideoProps[] | null;
  direction: ResponsiveStyleValue<
    "row" | "row-reverse" | "column" | "column-reverse"
  >;
}

const Videos = ({ videos, direction }: VideosProps) => {
  if (!videos?.length) return <div>Loading...</div>;

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      rowGap={2}
    >
      {videos?.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && (
            <ChannelCard channelDetail={video} marginTop="0" />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
