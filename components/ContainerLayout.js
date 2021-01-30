import React from "react";
import Link from "next/link";
import ThemeManager from "./ThemeManager";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../lib/auth";

const ContainerLayout = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDir="column" h="100%" maxW="60em" margin="auto" paddingX="1em">
      <Flex justify="space-between">
        <Link href="/">
          <Text
            fontSize="2.4em"
            fontWeight="bold"
            fontStyle="italic"
            userSelect="none"
            cursor="pointer"
          >
            Votee 🎉
          </Text>
        </Link>
        <Flex alignItems={"center"}>
          <ThemeManager />
          {!auth?.user ? (
            <div>
              <Link href="/login">
                <Button
                  marginLeft="0.8em"
                  marginRight="0.6em"
                  variant="outline"
                  borderWidth={2}
                  colorScheme="blue"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/signin">
                <Button variant="outline" borderWidth={2} colorScheme="blue">
                  Sign In
                </Button>
              </Link>
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
      <Flex flex="1" marginTop="2em" justifyContent="center">
        {children}
      </Flex>
      <Flex justifyContent="center" flexDir="row">
        Made with 💓 by
        <Link href="https://www.github.com/SudhanshuBhagwat">
          <Text
            marginLeft="0.3em"
            target="_blank"
            color="blue.400"
            fontStyle="italic"
            cursor="pointer"
          >
            Sudhanshu Bhagwat
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ContainerLayout;
