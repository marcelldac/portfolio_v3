/* eslint-disable react/prop-types */
import {Box, Text} from "@chakra-ui/react";

const Title = (props) => {
  return <Text fontSize='30' color='whiteAlpha.900' m={10}>{props.t}</Text>
}

const Subtitle = (props) => {
  return <Text fontSize='17' color='whiteAlpha.900' ml={12} mt={2}>{props.t}</Text>
}

export default function Home(){
  return(
    <Box bgColor='gray.700' w={['400px','800px','1300px']}>
      <Title t='Who am i?'/>
      <Subtitle t='Marcell. 19 y/o developer, Linux lover and bitcoiner!'/>
      {/* TODO: Colocar link do projeto unicripto (direcionar pro projeto dentro do site ou pro site da Unicripto que será criado) */}
      <Subtitle t='Currently working on UniCripto as CEO'/>
    </Box>
  )
}