import { Box, Text, Divider, Flex } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import CustomTabs from "../components/CustomTabs";
import Form from "../components/Form";
import { useEffect } from "react";

const HText = ({ children, onClick, _hover, cursor, textDecoration }) => {
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

const FastCounter = (props) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, props.quantity, { duration: 3 });
    return animation.stop;
  }, []);

  return (
    <Flex direction="row" ml={12} justify="center">
      <motion.h1
        color={props.color || "black"}
        style={{ fontWeight: 500, fontSize: 16 }}
      >
        {rounded}
      </motion.h1>
      <Text ml={2}>{props.text}</Text>
    </Flex>
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
        <Flex direction={{ base: "column", sm: "row" }} justifyContent="center">
          <Box color="gray.700" m={10} textAlign="center">
            <HText>
              <Text fontSize={20} fontWeight={500}>
                Marcell Dactes
              </Text>
              <b>Desenvolvedor Full-stack</b> de 19 anos, amante do{" "}
              <b>Linux </b>e <b>Criptomoedas</b>. Atualmente cursando
              <b> Ciência da Computação </b>
              na Unijorge.
            </HText>
            <FastCounter quantity={3808} text="+ Horas de código!" />
            <FastCounter
              quantity={48}
              text="+ Horas de Aulas/Oficinas Ministradas!"
            />
            <HText
              _hover={{ color: "blue.500" }}
              cursor="pointer"
              textDecoration="underline"
              onClick={() => window.scroll({ top: 900, behavior: "smooth" })}
            >
              Tenha um contato direto comigo!
            </HText>
          </Box>
          <Box
            textAlign={{ base: "left", sm: "center" }}
            display="block"
            alignItems="center"
            m={10}
          ></Box>
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
