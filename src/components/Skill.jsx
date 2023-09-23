import { Box, Image, Text, Tr, Td, Tbody } from "@chakra-ui/react";

export default function Skill(props) {
  return (
    <Tbody>
      <Tr>
        <Td>
          <img src={props.icon} /> {/* {skill.chakraui} */}
        </Td>
        <Td>
          {props.title}{/* ChakraUI */}
        </Td>
        <Td>
          {props.quantity}{/* {skillQuant.chakraui} */}
        </Td>
      </Tr >
    </Tbody>
  )
}