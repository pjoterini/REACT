import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { VideoProps } from "./Feed";

interface VideoCardProps {
  channelDetail: VideoProps | null;
  marginTop: string;
}

const ChannelCard = ({ channelDetail, marginTop }: VideoCardProps) => {
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "356px" },
        height: "326px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        borderRadius: "20px",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: 1 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
