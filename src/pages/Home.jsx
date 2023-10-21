import { Box, Text, Divider, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CustomTabs from "../components/CustomTabs";
import Form from "../components/Form";
import FastCounter from "../components/FastCounter";

const Title = ({ children }) => {
  return (
    <Text fontSize="30" color="gray.700" m={10}>
      {children}
    </Text>
  );
};

const Subtitle = ({ children, onClick, _hover, cursor, textDecoration }) => {
  return (
    <Text
      fontSize="17"
      color="gray.700"
      cursor={cursor}
      ml={12}
      mt={4}
      onClick={onClick}
      _hover={_hover}
      textDecoration={textDecoration}
    >
      {children}
    </Text>
  );
};

export default function Home() {
  return (
    <Box overflowY="hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          justifyContent="space-around"
        >
          <Box>
            <Title>Seja bem-vindo(a) ao meu Portfólio!</Title>
            <Subtitle>
              Marcell. Desenvolvedor de 19 anos, amante do Linux e Criptomoedas.
            </Subtitle>
            <Subtitle>
              Atualmente cursando Ciência da Computação na Unijorge.
            </Subtitle>
            <FastCounter quantity={3808} text="+ Horas de código!" />
            <FastCounter
              quantity={48}
              text="+ Horas de Aulas/Oficinas Ministradas!"
            />
            <Subtitle
              _hover={{ color: "blue.500" }}
              cursor="pointer"
              textDecoration="underline"
              onClick={() => window.scroll({ top: 900, behavior: "smooth" })}
            >
              Tenha um contato direto comigo!
            </Subtitle>
          </Box>
          <Box
            textAlign={{ base: "left", sm: "center" }}
            display="block"
            alignItems="center"
            m={10}
          >
            <Image
              src="./me.jpg"
              borderRadius="full"
              boxSize="200px"
              fallbackSrc="https://via.placeholder.com/150"
              objectFit="cover"
            />
            <Text as="b">Marcell Dactes</Text>
            <Text>Desenvolvedor Full-Stack</Text>
          </Box>
        </Flex>
        <CustomTabs />
        <Divider my={10} />
        <Flex justifyContent="center" textAlign="center">
          <Form />
        </Flex>
      </motion.div>
    </Box>
  );
}
