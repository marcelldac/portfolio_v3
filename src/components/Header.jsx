import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai';

const sidebarNavItems = [
  {
    display: 'Home',
    icon: <BiHomeAlt2 size={20} />,
    to: '/',
  },
  {
    display: 'Projects',
    icon: <GoProject size={20} />,
    to: '/projects',
  },
  {
    display: 'Skills',
    icon: <GiSkills size={20} />,
    to: '/skills',
  },
  {
    display: 'Github',
    icon: <AiFillGithub size={20} />,
    to: 'https://github.com/marcelldac',
    target: '_blank'
  },
  {
    display: 'Linkedin',
    icon: <AiFillLinkedin size={20} />,
    to: 'https://www.linkedin.com/in/marcelldactes/',
    target: '_blank'
  }
]

const Header = () => {
  const [update, setUpdate] = useState(false);
  const navTo = useNavigate();

  useEffect(() => {
    navTo('/');
    window.scrollTo(0, 460);
    setUpdate(false);
  }, [update]);


  return (
    <Flex
      bgColor='gray.900'
      padding='10'
      fontSize='17'
      justifyContent='center'
      maxW={{ base: '100%', sm: '1850px' }}
      display={{ base: 'block', sm: 'flex ' }}
    >
      {
        sidebarNavItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            target={item.target}
          >
            <Flex color='white' direction='row' pr='90px'>
              <Text _hover={{ color: 'blue.500' }}>{item.display}</Text>
            </Flex>
          </Link>
        ))
      }
      <Text color='white' _hover={{ color: 'blue.500' }} onClick={() => setUpdate(true)}>Contact</Text>
    </Flex >
  )
}

export default Header;