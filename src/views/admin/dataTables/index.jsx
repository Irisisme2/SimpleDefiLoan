import React, { useState } from "react";
import Web3 from "web3";
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
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    currency: "",
    repaymentDate: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = new Web3("https://rsk-testnet.nodeprovider.io"); // Połączenie z siecią RSK
      // Tworzenie transakcji, wywoływanie funkcji kontraktu itp.
      alert("Loan application submitted successfully!");
    } catch (error) {
      console.error("Error submitting loan application:", error);
      alert("Error submitting loan application. Please try again.");
    }
  };

  return (
    <Box maxW="8040px" m="auto">
      <Card p="155">
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter loan name"
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter loan amount"
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Currency</FormLabel>
            <Select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              placeholder="Select currency"
            >
              <option value="eth">ETH</option>
              <option value="rbtc">rBTC</option>
              <option value="usdt">USDT</option>
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Repayment Date</FormLabel>
            <Input
              type="date"
              name="repaymentDate"
              value={formData.repaymentDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Select status"
            >
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" mt="4">
            Submit Application
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default LoanApplicationForm;
