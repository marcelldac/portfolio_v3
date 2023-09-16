import { Box, Image, Text } from "@chakra-ui/react";

export default function Skill(props) {
  return (
    <>
      <Box
        border='1px'
        borderColor='gray.200'
        h='20'
        minW='77em'
        alignSelf='center'
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        color='gray.100'
      >
        <Image w='100px' src={props.skill} />
        <Text mr={10} >{props.title}</Text>
        {/* todo: ajeitar a quantidade */}
        <Text mr={10}>{props.quantity}</Text>
      </Box>
    </>
  )
}