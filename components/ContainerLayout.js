import React from "react";
import NextLink from "next/link";
import ThemeManager from "./ThemeManager";
import { Box, Button, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContainerLayout = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDir="column" h="100%" maxW="60em" margin="auto" paddingX="1em">
      <Flex justify="space-between">
        <NextLink href="/">
          <Text
            fontSize="2.4em"
            fontWeight="bold"
            fontStyle="italic"
            userSelect="none"
            cursor="pointer"
          >
            Votee 🎉
          </Text>
        </NextLink>
        <Flex alignItems={"center"}>
          <ThemeManager />
          {!auth?.user ? (
            <div>
              <NextLink href="/login">
                <Button
                  marginLeft="0.8em"
                  marginRight="0.6em"
                  variant="outline"
                  borderWidth={2}
                  colorScheme="blue"
                >
                  Log In
                </Button>
              </NextLink>
              <NextLink href="/signin">
                <Button variant="outline" borderWidth={2} colorScheme="blue">
                  Sign In
                </Button>
              </NextLink>
            </div>
          ) : (
            <Button
              variant="outline"
              marginLeft="0.8em"
              borderWidth={2}
              colorScheme="blue"
              onClick={(e) => auth.signOut()}
            >
              Sign Out
            </Button>
          )}
          {1 == 0 && (
            <div className="flex items-center justify-center">
              <p className="pr-2">Sudhanshu Bhagwat</p>
              <div className="bg-gray-500 h-10 w-10 rounded-full"></div>
            </div>
          )}
        </Flex>
      </Flex>
      <Flex flex="1" paddingY="1em" justifyContent="center" width="100%">
        {children}
      </Flex>
      <Flex justifyContent="center" flexDir="row">
        Made with 💓 by
        <Link
          color="blue.500"
          marginLeft="0.2em"
          fontStyle="italic"
          href="https://www.github.com/SudhanshuBhagwat"
          isExternal
        >
          Sudhanshu Bhagwat <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default ContainerLayout;
