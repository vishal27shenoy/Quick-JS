import { Box, Flex ,Text} from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <Flex scrollSnapStop={"always"} flexDirection={"column"} height={"300vh"}>
      <Navbar />
      <Flex
      height={"calc(100vh - 60px)"}
      width={"100vw"}
      bg={"#0F0F11"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      scrollSnapAlign={"center"} scrollSnapStop={"always"}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <img src={logo} alt="" />
        <Text color={"white"} fontSize={"150px"} fontWeight={"bold"}>
          <p
            style={{
              background:
            "linear-gradient(to right, #583D8A, #5063A0, #409ABF,#409ABF)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Quik JS
          </p>
        </Text>
      </Flex>
      <Flex gap={"30px"} alignItems={"center"}>
        <Box>
           <Link to={"https://www.npmjs.com/package/quikjs"} target="_blank">
           <Text color={"white"} fontWeight={"bold"} fontSize={"15px"}>View Docs</Text>
           </Link>
        </Box>
        <Flex height={"50px"} px={"20px"} alignItems={"center"} bg={"#409ABF"} borderRadius={"20px"}  cursor={"pointer"} onMouseDown={() => navigate("/home")}>
           <Text fontWeight={"bold"} fontSize={"15px"} color={"white"} >Get Started</Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex height={"200vh"}  bg={"#0F0F11"} flexDirection={"column"}>
        <Flex height={"100vh"} width={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} fontWeight={"bold"} scrollSnapAlign={"center"} scrollSnapStop={"always"}>
            <Text color={"white"} fontSize={"50px"} >Works at any scale</Text>
            <Text color={"white"} fontSize={"13px"}>Quick JS supports you as your team and app grows</Text>
        </Flex>
        <Flex height={"100vh"} width={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} fontWeight={"bold"} scrollSnapAlign={"center"} scrollSnapStop={"always"}>
            <Text color={"white"} fontSize={"50px"} >Build for anyone</Text>
            <Text color={"white"} fontSize={"13px"}>Belive in Quick JS's error-logging , security and <br/> accessibility support for everyone around world</Text>
        </Flex>
    </Flex>
    </Flex>
  );
};

export default Landing;
