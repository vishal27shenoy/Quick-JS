import { Flex, Text } from "@chakra-ui/react";
import React, { act, useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
const Items = ({ title, icon,setActive,active }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-restricted-globals
  const changeActive = () => setActive(title);

  return (
  
      <Flex
        alignItems={"center"}
        gap={"5px"}
        cursor={"pointer"}
        height={"40px"}
        width={"100%"}
        onMouseDown={() => {changeActive();navigate(`/${title}`)}}
      >
        <Flex>
          <Icon as={icon} color={active === title ? "black" : "gray"} />
        </Flex>
        <Flex>
          <Text fontSize={"13px"} color={active === title ? "black" : "gray"}>
            {title}
          </Text>
        </Flex>
      </Flex>
 
  );
};

export default Items;
