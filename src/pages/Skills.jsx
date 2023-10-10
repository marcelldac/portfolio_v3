import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
    Box,
} from '@chakra-ui/react'

import Skill from '../components/Skill';
import skill from '../utils/skills';

export default function Skills() {

    const [skillQuant, setSkillQuant] = useState({
        'javascript': 0,
        'reactnative': 0,
        'typescript': 0,
        'reactjs': 0,
        'golang': 0,
        'nextjs': 0,
        'chakraui': 0,
        'python': 0,
        'flask': 0,
        'jv': 0,
        'springboot': 0,
        'node': 0,
        'postgresql': 0,
        'django': 0,
        'mysql': 0,
        'csharp': 0,
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
    }, [])

    return (
        <Box display='flex' justifyContent='center'>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Icone</Th>
                            <Th>Nome</Th>
                            <Th>Quantos Projetos?</Th>
                        </Tr>
                    </Thead>
                    {/* C# and Frameworks */}
                    <Skill icon={skill.csharp} title="C#" quantity={skillQuant.csharp} />
                    {/* Javascript, Typescript and Frameworks */}
                    <Skill icon={skill.javascript} title='Javascript' quantity={skillQuant.javascript} />
                    <Skill icon={skill.typescript} title='Typescript' quantity={skillQuant.typescript} />
                    <Skill icon={skill.node} title='Node.js' quantity={skillQuant.node} />
                    <Skill icon={skill.react_js} title='React.js' quantity={skillQuant.reactjs} />
                    <Skill icon={skill.react_native} title='React Native' quantity={skillQuant.reactnative} />
                    <Skill icon={skill.chakraui} title='Chakra-UI' quantity={skillQuant.chakraui} />
                    {/* Java and Frameworks */}
                    <Skill icon={skill.java} title='Java' quantity={skillQuant.jv} />
                    <Skill icon={skill.spring_boot} title='Spring Boot' quantity={skillQuant.springboot} />
                    {/* Python and Frameworks */}
                    <Skill icon={skill.python} title='Python' quantity={skillQuant.python} />
                    <Skill icon={skill.django} title='Django' quantity={skillQuant.django} />
                    <Skill icon={skill.flask} title='Flask' quantity={skillQuant.flask} />
                    {/* Golang and Frameworks */}
                    <Skill icon={skill.golang} title='Golang' quantity={skillQuant.golang} />
                    {/* Databases */}
                    <Skill icon={skill.postgresql} title='PostgreSQL' quantity={skillQuant.postgresql} />
                    <Skill icon={skill.mysql} title='MySQL' quantity={skillQuant.mysql} />

                </Table>
            </TableContainer>
        </Box>
    )
}
