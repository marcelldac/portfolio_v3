/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { 
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,

} from "@chakra-ui/react";

export default function Project(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const size = 'xl';

  let aux = props.skills;

  return (
    <>
      <Button onClick={() => onOpen()} m={4}>{props.title}</Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        {/* TODO: Change bg color above */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign='center'>{props.title}</DrawerHeader>
          <DrawerBody>
            <Flex>
              <Image src={props.src} fallbackSrc='https://via.placeholder.com/150' boxSize='30em'/>
              <Text ml={3}>
                {props.description}
              </Text>
            </Flex>
            <Flex mt={2} justify='center'>
              {Object.keys(aux).map(function(key){
                return <Image pl={1} src={aux[key]}/>
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}