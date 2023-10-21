import React from 'react';
import {
    Button,
    Flex,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useMultiStyleConfig,
    useTab
} from '@chakra-ui/react';

const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
        <Button __css={styles.tab} {...tabProps} display='flex' >
            {isSelected ? '😎' : '😐'}
            {tabProps.children}
        </Button>
    )
})

export default function CustomTabs() {
    return (
        <Tabs textAlign='center'>
            <TabList display='flex' flexDirection='row' justifyContent={{base:'space-around', sm:'space-evenly'}}>
                <CustomTab>Como Palestrante</CustomTab>
                <CustomTab>Como Desenvolvedor</CustomTab>
                <CustomTab>Como Estudante</CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel fontSize={17}>
                    <Text as='b'>Na Unijorge (Salvador):</Text>
                    <Text>Monitorias semanais de lógica de programação durante um semestre (2023.1).</Text>
                    <Text>HTML5 e CSS3: Crie seu primeiro site.</Text>
                    <Text>Merge Sort: Entenda estrutura de dados de forma simples.</Text>
                    <Text>ReactJs: Criando seu primeiro WebApp (Parte 1 e 2).</Text>
                    <Text>ReactJs: Gerenciamento de Estado com Redux.</Text>
                    <Text>NodeJs: Criando um API de upload de imagens utilizando o MongoDB.</Text>
                    <Text as='b'>Na Unijorge (Camaçari):</Text>
                    <Text>Lógica de Programação: Iniciando no mundo da programação.</Text>
                </TabPanel>
                <TabPanel fontSize={17}>
                    <Text as='b'>Desenvolvedor Full-Stack</Text>
                    <Text mb={2} mx={20}>Apaixonado por programação. Iniciei meus estudos na área por volta dos 14 anos com a linguagem <b>Python</b>. Hoje em dia, programo principalmente em <b>Javascript</b> utilizando seus frameworks <b>React</b> e <b>Node</b>. Entendo que a linguagem de programação é meramente uma ferramenta. O importante mesmo é a <b>Lógica!</b> Pensando nisso, tenho projetos também em outras linguagens de programação, como <b>C#</b>, <b>Java</b> e até mesmo o próprio Python.</Text>
                    <Text>Algumas empresas que utilizam ou já utilizaram meus serviços:</Text>
                    <Flex direction='column'>
                        <Text as='b'>No Trânsito</Text>
                        <Text as='b'>GoodVibe</Text>
                        <Text as='b'>Learn More</Text>
                    </Flex>

                </TabPanel>
                <TabPanel ml={2} fontSize={17}>
                    <Text as='b'>Cientista da Computação! (quase)</Text>
                    <Text>Graduando em Ciência da Computação, atualmente no 4° semestre.</Text>
                    <Text>Ex-Monitor na Matéria de <b>Desenvolvimento Web.</b></Text>
                    <Text mx={20}>Participante em iniciação científica sobre análise de dados usando <b>aprendizado de máquina</b>: Tive a oportunidade de me envolver na análise de dados, explorando o uso de machine learning para tornar o processo de análise mais eficiente. Utilizamos técnicas como <b>clustering</b> e <b>árvore de decisão</b> no desenvolvimento do projeto de pesquisa.</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
