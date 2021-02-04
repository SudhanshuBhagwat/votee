import { Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const EmptyPoll = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      padding={3}
      borderRadius="0.5em"
      height="40%"
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
  );
};

export default EmptyPoll;
