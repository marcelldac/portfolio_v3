import { useEffect, useState } from 'react';
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";

import Skill from "../components/Skill";

import skill from '../utils/skills';

export default function Skills() {

  const [skillQuant, setSkillQuant] = useState({
    "javascript": 0,
    "reactnative": 0,
    "typescript": 0,
    "reactjs": 0,
    "golang": 0,
    "nextjs": 0,
    "chakraui": 0,
    "python": 0,
    "flask": 0,
  });

  function occurrCounter(array, param) {
    return array.filter(item => item.includes(param)).length;
  }

  function arrayLoop(res) {
    const topicsArray = res.map(item => item.topics || []);
    const newQuant = { ...skillQuant };

    for (const skill in newQuant) {
      newQuant[skill] = topicsArray.reduce((total, subarray) => total + occurrCounter(subarray, skill), 0)
    }

    setSkillQuant(newQuant);
  }

  useEffect(() => {
    axios.get('https://api.github.com/users/marcelldac/repos')
      .then(function (response) {
        arrayLoop(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  })

  return (
    <>
      <Box bgColor='gray.700' w={'1300px'} minH={'1000px'} display='flex' flexDirection='column'>
        <Box color='white' h='10' w='auto' p={2} mx={10} display='flex' alignItems='center' justifyContent='space-around'>
          <Text>Technology icon</Text>
          <Text>Technology name</Text>
          <Text>How many projects?</Text>
        </Box>
        <Skill skill={skill.react_native} title='React Native' quantity={skillQuant.reactnative} />
        <Skill skill={skill.javascript} title='Javascript' quantity={skillQuant.javascript} />
        <Skill skill={skill.typescript} title='Typescript' quantity={skillQuant.typescript} />
        <Skill skill={skill.react_js} title='React.js' quantity={skillQuant.reactjs} />
        <Skill skill={skill.golang} title='Golang' quantity={skillQuant.golang} />
        <Skill skill={skill.nextjs} title='Next.js' quantity={skillQuant.nextjs} />
        <Skill skill={skill.chakraui} title='Chakra-UI' quantity={skillQuant.chakraui} />
        <Skill skill={skill.python} title='Python' quantity={skillQuant.python} />
        <Skill skill={skill.flask} title='Flask' quantity={skillQuant.flask} />
      </Box>
    </>
  )
}
