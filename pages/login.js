import ContainerLayout from "../components/ContainerLayout";
import { useAuth } from "../lib/auth";
import { Flex, Button, Text, Box } from "@chakra-ui/react";

export default function login() {
  const auth = useAuth();

  return (
    <ContainerLayout>
      <Flex
        height="full"
        flexDir="column"
        justifyItems="center"
        alignItems="center"
        background="red"
        marginTop="12em"
      >
        <Text fontSize="3em" fontWeight="bold">
          Log in to Votee
        </Text>
        <Flex
          height="full"
          flexDir="column"
          justifyItems="center"
          alignItems="center"
          width="100%"
        >
          <Button
            width="full"
            variant="solid"
            background="gray.900"
            color="white"
            fontWeight="medium"
            marginY="1em"
            paddingY="1.6em"
            onClick={(e) => auth.signInWithGithub()}
          >
            Log In With Github
          </Button>
          <Button
            width="full"
            background="blue.500"
            color="white"
            fontWeight="medium"
            marginBottom="1em"
            paddingY="1.6em"
          >
            Log In With Google
          </Button>
          <Text fontSize="1.1em" textAlign="center" color="gray.300">
            Log in with <span>Email and Password</span>
            <Text>(Coming Soon)</Text>
          </Text>
        </Flex>
      </Flex>
    </ContainerLayout>
  );
}
