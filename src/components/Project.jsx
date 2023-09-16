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
  Box,
  Link,
} from "@chakra-ui/react";

export default function Project(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = 'xl';

  let aux = props.skills;

  return (
    <>
      <Button onClick={() => onOpen()} m={4}>{props.title}</Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent bg='gray.200'>
          <DrawerCloseButton />
          <DrawerHeader textAlign='center' fontSize='26'>{props.title}</DrawerHeader>
          <DrawerBody>
            <Flex placeItems='center'>
              <Image src={props.src} fallbackSrc='https://via.placeholder.com/150' boxSize='22em' borderRadius='lg' />
              <Box display='flex' flexDirection='column'>
                <Text ml={3} p={30}>
                  {props.description}
                </Text>
                <Flex mt={4} justify='center' >
                  {Object.keys(aux).map(function (key) {
                    return <Image pl={1} src={aux[key]} />
                  })}
                </Flex>
                <Link as={props.as} to={props.to} display='flex' justifyContent='center' href={props.link} isExternal mt={5} textDecoration='underline'>See Project
                </Link>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}