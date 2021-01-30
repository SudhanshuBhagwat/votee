import ContainerLayout from "../components/ContainerLayout";
import { Flex, Button, Text, Box } from "@chakra-ui/react";

export default function signin() {
  return (
    <ContainerLayout>
      <Flex
        height="full"
        flexDir="column"
        alignItems="center"
        background="red"
        marginTop="12em"
      >
        <Text
          fontSize="3em"
          lineHeight="1"
          fontWeight="bold"
          textAlign="center"
          width="66%"
        >
          Join Votee for creating collaborative polls.
        </Text>
        <Flex
          height="full"
          flexDir="column"
          justifyItems="center"
          alignItems="center"
          width="100%"
          marginTop="1em"
        >
          <Button
            width="20em"
            variant="solid"
            background="gray.900"
            color="white"
            fontWeight="medium"
            marginY="1em"
            paddingY="1.6em"
            onClick={(e) => auth.signInWithGithub()}
          >
            Sign In With Github
          </Button>
          <Button
            width="20em"
            background="blue.500"
            color="white"
            fontWeight="medium"
            marginBottom="1em"
            paddingY="1.6em"
          >
            Sign In With Google
          </Button>
          <Flex flexDir="row" alignItems="center">
            <Text fontSize="1.1em" textAlign="center">
              Already have an account?
            </Text>
            <Text
              marginLeft="0.4em"
              fontSize="1.1em"
              cursor="pointer"
              color="blue.400"
            >
              Log In
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </ContainerLayout>
  );
}
