import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const DashboardLayout = ({ children }) => {
  return (
    <Flex flexDir="column" width="100%">
      <Flex flexDir="row" justifyContent="space-between" marginBottom="1em">
        <Text fontSize="1.8em" fontWeight="bold">
          My Polls
        </Text>
        <Link href="/addPoll">
          <Button variant="outline">
            <AddIcon boxSize={3} marginRight="0.4em" /> Add Poll
          </Button>
        </Link>
      </Flex>
      {children}
    </Flex>
  );
};

export default DashboardLayout;
