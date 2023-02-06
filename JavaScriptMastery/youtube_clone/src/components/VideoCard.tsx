import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { VideoProps } from "./Feed";

interface VideoCardProps {
  video: VideoProps;
}

const VideoCard = ({
  video: { snippet },
  video: {
    id: { videoId },
  },
}: VideoCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "#333",
        width: { xs: "300px", sm: "360px" },
        boxShadow: "none",
        borderRadius: 0,
        paddingX: ".5rem",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component={"img"}
          image={snippet.thumbnails.high.url}
          sx={{
            width: { xs: "300px", sm: "360px" },
            height: 180,
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: 5 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
