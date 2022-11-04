import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Box mr={2}>Login</Box>
        </NextLink>
        <NextLink href="/register">Register</NextLink>
      </>
    );
  } else {
    body = (
      <Box>
        <Box>{data.me.username}</Box>
        <Button>Logout</Button>
      </Box>
    );
  }

  return (
    <Flex bg="tomato" p={4}>
      <Box p={4} ml={"auto"}>
        {body}
      </Box>
    </Flex>
  );
};
