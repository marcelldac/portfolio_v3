import { Box, Text } from "@chakra-ui/react";

import Skill from "../components/Skill";

import skill from '../utils/skills';

export default function Skills() {
  return (
    <>
      <Box bgColor='gray.700' w={['400px', '800px', '1300px']} display='flex' flexDirection='column'>
        <Box color='white' h='10' w='auto' p={2} mx={10} display='flex' alignItems='center' justifyContent='space-around'>
          <Text>Technology icon</Text>
          <Text>Technology name</Text>
          <Text>How much projects?</Text>
        </Box>
        <Skill skill={skill.react_native} title='React Native' quantity='7' />
        <Skill skill={skill.javascript} title='Javascript' quantity='26' />
        <Skill skill={skill.typescript} title='Typescript' quantity='16' />
        <Skill skill={skill.react_js} title='React.js' quantity='4' />
        <Skill skill={skill.golang} title='Golang' quantity='3' />
        <Skill skill={skill.nextjs} title='Next.js' quantity='2' />
        <Skill skill={skill.chakraui} title='Chakra-UI' quantity='1' />
        <Skill skill={skill.python} title='Python' quantity='9' />
        <Skill skill={skill.flask} title='Flask' quantity='1' />
      </Box>
    </>
  )
}