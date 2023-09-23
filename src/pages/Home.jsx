import {
  Box,
  Text,
  Divider,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";

import CustomTabs from '../components/CustomTabs';

const Title = ({ children }) => {
  return <Text fontSize='30' color='gray.700' m={10}>{children}</Text>
}

const Subtitle = ({ children }) => {
  return <Text fontSize='17' color='gray.700' ml={12} mt={4}>{children}</Text>
}

export default function Home() {
  return (
    <Box>
      <Flex direction='row' justifyContent='space-around'>
        <Box>
          <Subtitle >Marcell. 19 y/o developer, Linux lover and bitcoiner!</Subtitle>
          {/* TODO: Colocar link do projeto unicripto (direcionar pro projeto dentro do site ou pro site da Unicripto que será criado) */}
          <Subtitle>Currently working on UniCripto as CEO.</Subtitle>
          <Subtitle>Currently delving into Java.</Subtitle>
          <Subtitle>Freelancer Developer since 2022!</Subtitle>
        </Box>
        <Box textAlign='center'>
          <Image src='./me.jpg' borderRadius='full' boxSize='150px' fallbackSrc='https://via.placeholder.com/150' justifySelf='stretch' />
          <Text as='b'>Marcell Dactes</Text>
          <Text>Full-Stack Developer</Text>
        </Box>
      </Flex>
      <Divider my={10} />
      <CustomTabs />
    </Box>

  )
}