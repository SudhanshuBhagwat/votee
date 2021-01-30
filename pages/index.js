import Link from "next/link";
import ContainerLayout from "../components/ContainerLayout";
import Landing from "../components/Landing";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <ContainerLayout>
      {/* {auth?.user ? ( */}
      <Flex flexDir="column" width="100%">
        <header>
          <Text fontSize="1.8em" fontWeight="bold">
            My Polls
          </Text>
        </header>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          padding={3}
          borderRadius="0.5em"
          height="40%"
          marginTop="1em"
          background="gray.100"
        >
          <Text fontSize="1.5em">Create Realtime Polls for your needs</Text>
          <Text marginBottom="1em">You do not have any polls</Text>
          <Link href="/addPoll">
            <Button variant="solid" background="gray.900" color="white">
              Create a new Poll 📊
            </Button>
          </Link>
        </Flex>
      </Flex>
      {/* ) : (
        <Landing />
      )} */}
    </ContainerLayout>
  );
}
