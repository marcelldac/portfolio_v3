import { Box, Text, Divider } from "@chakra-ui/react";


const Title = ({ children }) => {
  return <Text fontSize='30' color='gray.700' m={10}>{children}</Text>
}

const Subtitle = ({ children }) => {
  return <Text fontSize='17' color='gray.700' ml={12} mt={4}>{children}</Text>
}

export default function Home() {
  return (
    <Box>
      <Title>Who am i?</Title>
      <Subtitle>Marcell. 19 y/o developer, Linux lover and bitcoiner!</Subtitle>
      {/* TODO: Colocar link do projeto unicripto (direcionar pro projeto dentro do site ou pro site da Unicripto que será criado) */}
      <Subtitle>Currently working on UniCripto as CEO.</Subtitle>
      <Subtitle>Currently delving into Java.</Subtitle>
      <Subtitle>I worked as a Mobile Developer.</Subtitle>
      <Divider />
    </Box>
  )
}