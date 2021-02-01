import { PhoneIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Spacer,
  Progress,
  Stack,
  Circle,
} from "@chakra-ui/react";

const FeatureComponent = () => {
  return (
    <Flex
      background="gray.100"
      borderRadius="0.5em"
      width="full"
      marginLeft="2em"
      flexDir="column"
      padding="1em"
    >
      <Text fontSize="2.4em" fontWeight="semibold" lineHeight="1.2em">
        Naruto VS Sasuke : Who is the best?
      </Text>
      <Flex>
        <Text fontSize="0.8em">by</Text>
        <Text fontSize="0.8em" marginLeft="0.4em" fontWeight="semibold">
          Sudhanshu Bhagwat
        </Text>
        <Text fontSize="0.8em" marginLeft="0.4em">
          {" "}
          &bull; 3 hours ago
        </Text>
        <Spacer />
        <Box
          fontSize="0.8em"
          fontWeight="semibold"
          background="green.200"
          paddingX="0.6em"
          paddingY="0.1em"
          borderRadius="0.4em"
        >
          100,00 votes
        </Box>
      </Flex>
      <Stack marginTop="0.6em" spacing="1em">
        <Poll
          name="Sasuke"
          votes={20000}
          percentage={20}
          value={20}
          color="pink"
        />
        <Poll
          name="Naruto"
          votes={80000}
          percentage={80}
          value={80}
          color="cyan"
        />
      </Stack>
    </Flex>
  );
};

const Poll = ({ name, votes, percentage, value, color }) => {
  return (
    <Flex alignItems="center">
      <Circle
        size="1.6em"
        bg="tomato"
        color="white"
        marginTop="0.6em"
        marginRight="0.6em"
      >
        <PhoneIcon boxSize="0.8em" />
      </Circle>
      <Box width="full">
        <Flex>
          <Text>{name}</Text>
          <Spacer />
          <Text>{votes} Votes</Text>
          <Text marginLeft="1em">{percentage}%</Text>
        </Flex>
        <Progress
          value={value}
          size="md"
          borderRadius="1em"
          colorScheme={color}
          marginTop="0.2em"
        />
      </Box>
    </Flex>
  );
};

export default FeatureComponent;
