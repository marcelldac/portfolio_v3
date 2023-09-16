import { useState } from 'react';
import axios from "axios";

import { Box, Text } from "@chakra-ui/react";

import Skill from "../components/Skill";

import skill from '../utils/skills';

export default function Skills() {
  /* Adding a skill quantity */
  /* Create a state */
  const [jsQuant, setJsQuant] = useState();
  const [rnQuant, setRnQuant] = useState();
  const [tsQuant, setTsQuant] = useState();
  const [reactQuant, setReactQuant] = useState();
  const [goQuant, setGoQuant] = useState();
  const [nextQuant, setNextQuant] = useState();
  const [chakrauiQuant, setChakrauiQuant] = useState();
  const [pythonQuant, setPythonQuant] = useState();
  const [flask, setFlask] = useState();

  function occurrCounter(array, param) {
    return array.filter(item => item.includes(param)).length;
  }

  function arrayLoop(res) {
    const topicsArray = res.map(item => item.topics || []);
    let initialValue = 0;
    /* Set state value to this function and modify 
    occurrCounter param to the name of your skill. */
    setJsQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'javascript'), initialValue));
    setRnQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'react-native'), initialValue));
    setTsQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'typescript'), initialValue));
    setReactQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'reactjs'), initialValue));
    setGoQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'golang'), initialValue));
    setNextQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'nextjs'), initialValue));
    setChakrauiQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'chakraui'), initialValue));
    setPythonQuant(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'python'), initialValue));
    setFlask(topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, 'flask'), initialValue));
  }

  function apiReq() {
    axios.get('https://api.github.com/users/marcelldac/repos')
      .then(function (response) {
        const res = response.data;
        arrayLoop(res);
      }).catch(function (error) {
        console.log(error);
      });
  }

  apiReq();

  return (
    <>
      <Box bgColor='gray.700' w={['400px', '800px', '1300px']} display='flex' flexDirection='column'>
        <Box color='white' h='10' w='auto' p={2} mx={10} display='flex' alignItems='center' justifyContent='space-around'>
          <Text>Technology icon</Text>
          <Text>Technology name</Text>
          <Text>How much projects?</Text>
        </Box>
        <Skill skill={skill.react_native} title='React Native' quantity={rnQuant} />
        <Skill skill={skill.javascript} title='Javascript' quantity={jsQuant} />
        <Skill skill={skill.typescript} title='Typescript' quantity={tsQuant} />
        <Skill skill={skill.react_js} title='React.js' quantity={reactQuant} />
        <Skill skill={skill.golang} title='Golang' quantity={goQuant} />
        <Skill skill={skill.nextjs} title='Next.js' quantity={nextQuant} />
        <Skill skill={skill.chakraui} title='Chakra-UI' quantity={chakrauiQuant} />
        <Skill skill={skill.python} title='Python' quantity={pythonQuant} />
        <Skill skill={skill.flask} title='Flask' quantity={flask} />
      </Box>
    </>
  )
}