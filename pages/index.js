import Router from "next/router";
import ContainerLayout from "../components/ContainerLayout";
import Landing from "../components/Landing";
import { useAuth } from "../lib/auth";
import { useEffect } from "react";
import { Spinner, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      Router.replace("/dashboard");
    }
  }, [auth]);

  if (!auth.user) {
    return (
      <ContainerLayout>
        <Landing />
      </ContainerLayout>
    );
  }

  return (
    <Flex
      height="full"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
      <Text marginTop="1em">Loading...</Text>
    </Flex>
  );
}
