/* eslint-disable react/react-in-jsx-scope */
import {
    Button,
    Image,
    Text,
    Card,
    Stack,
    CardBody,
    Heading,
    CardFooter,
    Box,
    Flex,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';

import MoreThanOneProjectModal from './MoreThanOneProjectModal';

export default function Project(props) {

    const skills = props.skills;

    return (
        <Card direction={{ base: 'column', sm: 'row' }} variant='elevated' mt={20}>

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
                    <Flex>
                        {skills.map((element, index) => {
                            return (
                                <Box key={index} pr={4}>
                                    <Image src={element} />
                                </Box>
                            );
                        })}
                    </Flex>
                </CardBody>
                <CardFooter>
                    {Array.isArray(props.link) ? (
                        <MoreThanOneProjectModal linkFront={props.link[0]} linkBack={props.link[1]} />
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a href={props.link} target="_blank" rel="noreferrer">
                                <Button variant='solid' colorScheme='facebook' isDisabled={props.link == '' ? true : false}>Ver mais</Button>
                            </a>
                        </motion.div>
                    )}
                </CardFooter>
            </Stack>
        </Card>
    )
}
