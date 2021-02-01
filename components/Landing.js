import { Flex, Text, Button } from "@chakra-ui/react";
import FeatureComponent from "../components/FeatureComponent";
import Features from "../components/Features";

// 1 - Creating high quality polls for free
// 2 - Create polls with multiple participants
// 3 - Real time updates for polls
// 4 - Syncing across devices
// 5 - Something really cool
// 6 - Embed poll snippets in your websites

const Landing = () => {
  return (
    <Flex flexDir="column" width="100%" borderRadius="0.5em" height="full">
      <Flex>
        <Flex flexDir="column" width="18em">
          <Text fontSize="3em" fontWeight="bold" textAlign="left">
            Create Polls Like Never Before
          </Text>
          <Flex>
            <Button>Login to get Started</Button>
            <Button marginLeft="1em">See how it works</Button>
          </Flex>
        </Flex>
        <FeatureComponent />
      </Flex>
      <Features />
    </Flex>
  );
};

export default Landing;
