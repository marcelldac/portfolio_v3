import {
  Button,
  Image,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
} from "@chakra-ui/react";

export default function Project(props) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      mt={20}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={props.src}
        fallbackSrc='https://via.placeholder.com/150'
      />
      <Stack>
        <CardBody>
          <Heading size='md'>{props.title}</Heading>
          <Text py='2'>
            {props.description}
          </Text>
        </CardBody>
        <CardFooter>
          <a href={props.link} target="_blank">
            <Button variant='solid' colorScheme='green' >
              See More
            </Button>
          </a>
        </CardFooter>
      </Stack>
    </Card>
  )
}