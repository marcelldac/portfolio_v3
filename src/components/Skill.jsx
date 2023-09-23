import { Tr, Td, Tbody } from "@chakra-ui/react";

export default function Skill(props) {
  return (
    <Tbody>
      <Tr>
        <Td>
          <img src={props.icon} />
        </Td>
        <Td>
          {props.title}
        </Td>
        <Td>
          {props.quantity}
        </Td>
      </Tr >
    </Tbody>
  )
}