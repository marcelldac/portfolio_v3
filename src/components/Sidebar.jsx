import {Box,Flex,Image,Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiHomeAlt2} from 'react-icons/bi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import {GoProject} from 'react-icons/go';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <BiHomeAlt2 size={20}/>,
        to: '/',
    },
    {
        display: 'Projects',
        icon: <GoProject size={20}/>,
        to: '/projects',
    },
    {
        display: 'Skills',
        icon: <GiSkills size={20}/>,
        to: '/skills',
    },
    {
        display: 'Resume',
        icon: <BsFillPersonLinesFill size={20}/>,
        to: '/resume',
    },
]

const Sidebar = () => {
    return (
      <Box bgColor='gray.900' h={['650px','650px','739px']}>
        <Image src='/dacti-webapps.png' boxSize={60} objectFit='cover' fallbackSrc='https://via.placeholder.com/150'/>
          {
            sidebarNavItems.map((item, index) => (
              <Link to={item.to} key={index}>
                <Flex direction='row' justify='left'>
                  <Text ml={10} mt={30.9} color='gray.50'>
                    {item.icon}
                  </Text>
                  <Text mt={30} ml={4} color='gray.50'>
                    {item.display}
                  </Text>
                </Flex>
              </Link>
            ))
          }
      </Box>
    )
};

export default Sidebar;