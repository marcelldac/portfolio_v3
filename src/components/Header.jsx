/* eslint-disable react/react-in-jsx-scope */
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BiHomeAlt2 } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const sidebarNavItems = [
  {
    display: "Início",
    icon: <BiHomeAlt2 size={20} />,
    to: "/",
  },
  {
    display: "Projetos",
    icon: <GoProject size={20} />,
    to: "/projects",
  },
  {
    display: "Habilidades",
    icon: <GiSkills size={20} />,
    to: "/skills",
  },
  {
    display: "Github",
    icon: <AiFillGithub size={20} />,
    to: "https://github.com/marcelldac",
    target: "_blank",
  },
  {
    display: "Linkedin",
    icon: <AiFillLinkedin size={20} />,
    to: "https://www.linkedin.com/in/marcell-dactes-23b384294/",
    target: "_blank",
  },
];

const Header = () => {
  return (
    <Flex
      bgColor="gray.900"
      padding="5"
      fontSize="17"
      justifyContent="center"
      maxW="100%"
      display={{ base: "block", sm: "flex " }}
      boxShadow="dark-lg"
    >
      {sidebarNavItems.map((item, index) => (
        <Flex px="30px" color="white">
          <motion.div whileTap={{ scale: 1.1 }}>
            <Link to={item.to} key={index} target={item.target}>
              <Text _hover={{ color: "blue.500" }}>{item.display}</Text>
            </Link>
          </motion.div>
        </Flex>
      ))}
    </Flex>
  );
};

export default Header;
