import React, { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaDiscord, FaStar, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <Flex
      height={"60px"}
      px={"20px"}
      alignItems={"center"}
      borderBottom={"solid lightgray 1px"}
    >
      <Text fontWeight={"bold"} onClick={() => navigate("/")} cursor={"pointer"}>Quik JS</Text>
      <Flex gap={"10px"} ml={"auto"} alignItems={"center"}>
        <Flex
          cursor={"pointer"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={FaDiscord} />
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          border={"solid lightgray 1px"}
          px={"2px"}
          borderRadius={"3px"}
          gap={"10px"}
        >
          <Icon as={FaGithub} />
          <Flex
            fontWeight={"bold"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            2<Icon as={FaStar} color={"gold"} />
          </Flex>
        </Flex>
        {login && (
          <Flex px={"4px"} cursor={"pointer"} borderRadius={"3px"} gap={"10px"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtt3zOq6B9NnqaNv6ApPqWUmxmTf5hxtF_g&s"
              alt=""
              height={"20px"}
              width={"25px"}
              style={{ borderRadius: "50%" }}
            />{" "}
            <Text fontWeight={"500"}>vishalshenoy603@gmail.com</Text>
          </Flex>
        )}
        {!login && (
          <Flex
            px={"4px"}
            border={"solid lightgray 1px"}
            cursor={"pointer"}
            borderRadius={"3px"}
          >
            <Text fontWeight={"bold"}>Login</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
