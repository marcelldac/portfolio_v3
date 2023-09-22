/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";

const Title = ({ children }) => {
  return <Text fontSize='30' color='whiteAlpha.900' m={10}>{children}</Text>
}

const Subtitle = ({ children }) => {
  return <Text fontSize='17' color='whiteAlpha.900' ml={12} mt={4}>{children}</Text>
}

export default function Home() {
  return (
    <Box bgColor='gray.700' w={['400px', '800px', '1300px']}>
      <Title>Who am i?</Title>
      <Subtitle>Marcell. 19 y/o developer, Linux lover and bitcoiner!</Subtitle>
      {/* TODO: Colocar link do projeto unicripto (direcionar pro projeto dentro do site ou pro site da Unicripto que será criado) */}
      <Subtitle>Currently working on UniCripto as CEO.</Subtitle>
      <Subtitle>Currently delving into Java.</Subtitle>
      <Subtitle>I worked as a Mobile Developer.</Subtitle>
    </Box>
  )
}