import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Items from "./sidebar-component/Items";
import { GoHome, GoProjectSymlink, GoTable } from "react-icons/go";
import { CiSettings,CiLogout } from "react-icons/ci";
const siderbarItem = [
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Projects",
    icon: GoProjectSymlink,
  },
  {
    title: "Schemas",
    icon: GoTable,
  },
  {
    title: "Settings",
    icon: CiSettings,
  },
];
const Sidebar = () => {
  const [active,setActive] = useState("Home");
  const mapSidebarItems = () => {
    return siderbarItem.map((item) => {
      return <Items title={item.title} icon={item.icon} active={active} setActive={setActive}/>;
    });
  };
  return (
    <Flex
      width={"200px"}
      height={"calc(100vh - 60px)"}
      borderRight={"solid lightgray 1px"}
      p={"10px"}
      pl={"20px"}
      flexDirection={"column"}
    >
      <Flex flexDirection={"column"}  width={"100%"} gap={"10px"}>{mapSidebarItems()}</Flex>

      <Flex mt={"auto"}>
        <Items title={"Logout"} icon={CiLogout} active={active} setActive={setActive}/>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
