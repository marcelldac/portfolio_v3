import { Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
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
          <Link to={item.to} key={index} target={item.target}>
            {/* <Flex direction='row '> */}
            <Flex color='white' direction='row' pr='90px'>
              {item.display}
            </Flex>
          </Link>
        ))
      }
    </Flex >
  )
}

export default Header;