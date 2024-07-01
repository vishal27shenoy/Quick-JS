import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Flex flexDirection={"column"}>
      <Navbar />
      <Flex>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
