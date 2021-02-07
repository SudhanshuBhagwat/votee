import { format, parseISO } from "date-fns";
import { Table, Th, Tr, Td } from "./Table";
import { SettingsIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";
import { deletePoll } from "../lib/db";
import { mutate } from "swr";

const PollTable = ({ polls }) => {
  async function handleDelete(id) {
    await deletePoll(id);
    mutate(
      "/api/polls",
      async (data) => {
        return {
          polls: data.polls.filter((poll) => {
            poll.id !== id;
          }),
        };
      },
      false
    );
  }

  return (
    <Table width="full">
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Poll Link</Th>
          <Th>Status</Th>
          <Th>Date Added</Th>
          <Th>Actions</Th>
        </Tr>
      </thead>
      <tbody>
        {polls.map((poll) => {
          return (
            <Tr key={poll.id}>
              <Td fontWeight="bold">{poll.pollName}</Td>
              <Td>{poll.status}</Td>
              <Td>
                <NextLink
                  as={`/poll/${poll.id}`}
                  href="/poll/[pollId]"
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    View Poll
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(poll.createdAt), "PPpp")}</Td>
              <Td>
                <Tooltip label="Edit Poll" fontSize="md">
                  <NextLink
                    href={{
                      pathname: "/editPoll",
                      query: {
                        pollId: poll.id,
                      },
                    }}
                  >
                    <SettingsIcon marginRight="0.8em" />
                  </NextLink>
                </Tooltip>
                <Tooltip label="Delete Poll" fontSize="md">
                  <DeleteIcon onClick={() => handleDelete(poll.id)} />
                </Tooltip>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PollTable;
