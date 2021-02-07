import Link from "next/link";
import { useState, useEffect } from "react";
import ContainerLayout from "../components/ContainerLayout";
import {
  Flex,
  Button,
  Text,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
import { Table, Th, Td, Tr } from "../components/Table";
import { useForm } from "react-hook-form";
import { useAuth } from "../lib/auth";
import { createPoll, getData, updatePoll } from "../lib/db";
import Router, { useRouter } from "next/router";
import { mutate } from "swr";
import { convertPathToQuery } from "../utils/functions";

export default function editPoll() {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState();
  const [participants, setParticipants] = useState([]);
  const {
    register: registerPoll,
    handleSubmit: handlePollSubmit,
    errors: pollErrors,
    setValue,
  } = useForm();
  const {
    register: registerParticipant,
    handleSubmit: handleParticipantSubmit,
    errors: ParticipantErrors,
    reset,
  } = useForm();

  useEffect(async () => {
    let poll = Router.query.pollId;
    if (poll === undefined) {
      poll = convertPathToQuery(router.asPath).pollId;
    }
    const pollData = await getData(poll);
    setData(pollData);
    setParticipants((participants) => [...pollData.participants]);
    setValue("pollName", pollData.pollName);
  }, []);

  const onSubmitPoll = async ({ pollName }) => {
    if (data.pollName !== pollName) {
      updatePoll(data.pollId, pollName);
    }
    // if (participants.length < 2) {
    //   toast({
    //     title: "Insufficient participants",
    //     description: "Please add more participants to the poll",
    //     status: "error",
    //     duration: 6000,
    //     isClosable: true,
    //   });
    //   return;
    // }
    // const newPoll = {
    //   uid: auth.user.uid,
    //   pollName,
    //   status: "INACTIVE",
    //   createdAt: new Date().toISOString(),
    //   participants,
    // };
    // const id = await createPoll(newPoll);
    // toast({
    //   title: "Success!",
    //   description: "We've successfully created a new poll for you.",
    //   status: "success",
    //   duration: 6000,
    //   isClosable: true,
    // });
    mutate(
      "/api/polls",
      async (pollData) => {
        return {
          polls: pollData.polls.map((poll) => {
            if (poll.id === data.pollId) {
              return {
                ...poll,
                pollName: pollName,
              };
            }
            return poll;
          }),
        };
      },
      false
    );
    Router.push("/dashboard");
  };

  const onSubmitParticipant = (values) => {
    setParticipants((part) => [...part, values]);
    reset();
  };

  return (
    <ContainerLayout>
      <Flex flexDir="column" width="100%">
        <Flex justifyContent="space-between">
          <Link href="/dashboard">
            <Flex alignItems="center" cursor="pointer">
              <ArrowBackIcon
                marginRight="0.6em"
                boxSize={5}
                marginTop="0.2em"
              />
              <Text fontSize="1.2em" fontWeight="semibold">
                Go back to Polls
              </Text>
            </Flex>
          </Link>
          <Button
            rightIcon={<CheckIcon />}
            onClick={handlePollSubmit(onSubmitPoll)}
            colorScheme="teal"
            variant="outline"
          >
            Edit Poll
          </Button>
        </Flex>
        <Flex
          flexDir="column"
          padding={3}
          borderRadius="0.5em"
          marginTop="1em"
          width="100%"
          background="gray.100"
          padding="1em"
        >
          <Flex flexDir="column">
            <FormControl isRequired>
              <FormLabel>Poll Name</FormLabel>
              <Input
                ref={registerPoll({
                  required: true,
                })}
                name="pollName"
                variant="outline"
                background="white"
                placeholder="A name for the poll (Naruto VS Sasuke)"
              />
            </FormControl>
          </Flex>
          <Flex flexDir="column">
            <form onSubmit={handleParticipantSubmit(onSubmitParticipant)}>
              <FormControl>
                <FormLabel marginBottom="0.4em" marginTop="0.4em">
                  Participants
                </FormLabel>
                <Flex>
                  <Input
                    ref={registerParticipant({
                      required: true,
                    })}
                    name="name"
                    variant="outline"
                    background="white"
                    width="100%"
                    placeholder="Name a participant (Naruto)"
                  />
                  <Button
                    type="submit"
                    colorScheme="teal"
                    variant="outline"
                    fontSize="1.2em"
                    paddingX="1em"
                    marginLeft="1em"
                  >
                    Add
                  </Button>
                </Flex>
                <Textarea
                  ref={registerParticipant({
                    required: true,
                  })}
                  name="description"
                  placeholder="A simple description for the participant"
                  background="white"
                  marginTop="1em"
                />
              </FormControl>
            </form>
            {participants.length > 0 && (
              <Table marginTop="1em">
                <thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                  </Tr>
                </thead>
                <tbody>
                  {participants.map((part) => {
                    return (
                      <Tr key={part.id}>
                        <Td>{part.name}</Td>
                        <Td>{part.description}</Td>
                      </Tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </Flex>
        </Flex>
      </Flex>
    </ContainerLayout>
  );
}
