import React from "react";
import { Th, Td, Tr, Table } from "@chakra-ui/react";

export const CTh = (props) => (
  <Th
    textTransform="uppercase"
    fontSize="md"
    color="gray.500"
    fontWeight="medium"
    px={4}
    {...props}
  />
);

export const CTd = (props) => (
  <Td
    color="gray.900"
    p={4}
    borderBottom={props.islast ? "" : "1px solid"}
    borderBottomColor="gray.100"
    {...props}
  />
);

export const CTable = (props) => {
  return (
    <Table
      textAlign="left"
      backgroundColor="white"
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  );
};
