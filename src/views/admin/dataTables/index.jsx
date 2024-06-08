import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import Card from "components/card/Card";

const LoanApplicationForm = () => {
  return (
    <Box maxW="8040px" m="auto">
      <Card p="155">
        <FormControl mb="4">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter loan name" />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Amount</FormLabel>
          <Input type="number" placeholder="Enter loan amount" />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Currency</FormLabel>
          <Select placeholder="Select currency">
            <option value="eth">ETH</option>
            <option value="rbtc">rBTC</option>
            <option value="usdt">USDT</option>
          </Select>
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Repayment Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Status</FormLabel>
          <Select placeholder="Select status">
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" mt="4">
          Submit Application
        </Button>
      </Card>
    </Box>
  );
};

export default LoanApplicationForm;
