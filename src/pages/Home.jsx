import {
    Box,
    Text,
    Divider,
    Image,
    Flex,
} from '@chakra-ui/react';
import { motion } from "framer-motion";

import CustomTabs from '../components/CustomTabs';
import Form from '../components/Form';
import FastCounter from '../components/FastCounter';

const Title = ({ children }) => {
    return <Text fontSize='30' color='gray.700' m={10}>{children}</Text>
}

const Subtitle = ({ children, onClick, _hover, cursor, textDecoration }) => {
    return <Text
        fontSize='17'
        color='gray.700'
        cursor={cursor}
        ml={12}
        mt={4}
        onClick={onClick}
        _hover={_hover}
        textDecoration={textDecoration}
    >{children}</Text>
}

const CounterComponent = ({ children }) => {
    return (
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Flex
                fontSize={20}
                m={{ base: '1em', sm: '1em' }}
                color='#EBF8FF'
                bgColor='#2C5282'
                borderRadius={30}
                justify={{ base: 'space-around', sm: 'center' }}
                alignItems='center'
                w={{ base: '13em', sm: 'auto' }}
                h={{ base: '4m', sm: '1em' }}
                p={6}
            >
                {children}
            </Flex>
        </motion.div>
    )
}

export default function Home() {

    return (
        <Box overflowY='hidden'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Flex direction={{ base: 'column', sm: 'row' }} justifyContent='space-around'>
                    <Box>
                        <Title>Seja bem-vindo(a) ao meu Portfólio!</Title>
                        <Subtitle >Marcell. Desenvolvedor de 19 anos, amante do Linux e Criptomoedas.</Subtitle>
                        <Subtitle>Atualmente cursando Ciência da Computação na Unijorge.</Subtitle>
                        <Subtitle
                            _hover={{ color: 'blue.500' }}
                            cursor='pointer'
                            textDecoration='underline'
                            onClick={() => window.scroll({ top: 500, behavior: 'smooth' })}
                        >Tenha um contato direto comigo!</Subtitle>
                        <CounterComponent>
                            <FastCounter quantity={4000} /> {/* 4380 = 2y * 6h/day  */}
                            <Text ml={2}>Horas  de código!</Text>
                        </CounterComponent>
                        <CounterComponent>
                            <FastCounter quantity={3} />
                            <Text ml={2}>Empresas utilizam ou utilizaram meus serviços!</Text>
                        </CounterComponent>
                        <CounterComponent>
                            <FastCounter quantity={2} />
                            <Text ml={2}>Anos na área!</Text>
                        </CounterComponent>
                    </Box>
                    <Box
                        textAlign={{base:'left', sm: 'center'}}
                        display='block'
                        alignItems='center'
                        m={10}
                    >
                        <Image
                            src='./me.jpg'
                            borderRadius='full'
                            boxSize='200px'
                            fallbackSrc='https://via.placeholder.com/150'
                            objectFit='cover'
                        />
                        <Text as='b'>Marcell Dactes</Text>
                        <Text>Desenvolvedor Full-Stack</Text>
                    </Box>
                </Flex>
                <CustomTabs />
                <Divider my={10} />
                <Flex justifyContent='center' textAlign='center'>
                    <Form />
                </Flex>
            </motion.div>
        </Box>
    )
}
