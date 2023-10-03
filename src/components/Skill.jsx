import { Tr, Td, Tbody, Image, Text } from '@chakra-ui/react';

export default function Skill(props) {
    return (
        <Tbody>
            <Tr>
                <Td>
                    <Image
                        src={props.icon}
                        fallbackSrc='https://via.placeholder.com/150'
                        borderRadius='5px'
                    />
                </Td>
                <Td>
                    <Text>{props.title}</Text>
                </Td>
                <Td>
                    <Text>{props.quantity}</Text>
                </Td>
            </Tr >
        </Tbody>
    )
}