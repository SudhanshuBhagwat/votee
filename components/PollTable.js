import { format, parseISO } from "date-fns";
import { Table, Th, Tr, Td } from "./Table";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const PollTable = ({ polls }) => {
  return (
    <Table width="full">
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Poll Link</Th>
          <Th>Status</Th>
          <Th>Date Added</Th>
          <Th>{""}</Th>
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
              <Td></Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PollTable;
