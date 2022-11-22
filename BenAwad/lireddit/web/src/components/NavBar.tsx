import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  const [isServer, setIsServer] = useState(true);

  useEffect(() => setIsServer(false), []);

  const [{ data, fetching }] = useMeQuery({
    pause: isServer,
  });

  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <Box mr={2}>
          <NextLink href="/login">Login</NextLink>
        </Box>
        <NextLink href="/register">Register</NextLink>
      </>
    );
  } else {
    body = (
      <>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          onClick={() => {
            logout({});
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </>
    );
  }

  return (
    <Flex align="center" justifyContent="space-evenly" bg="tan" p={4}>
      <NextLink href="/">
        <Heading>LiReddit</Heading>
      </NextLink>
      <Flex justifyContent="end">{body}</Flex>
    </Flex>
  );
};
