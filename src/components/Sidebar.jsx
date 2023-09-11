import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
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
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
      <Box bgColor='gray.900' h='50em'>
        <Text fontSize={20} mx={3} as='b' color='gray.50'>
        Marcell Dactes
        </Text>
        <div ref={sidebarRef}>
            <div
              ref={indicatorRef}
              style={{transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`}}
            ></div>
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
        </div>
      </Box>
    )
};

export default Sidebar;