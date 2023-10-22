import React from "react";
import {
  Button,
  Flex,
  Image,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];
  const styles = useMultiStyleConfig("Tabs", tabProps);

  return (
    <Button __css={styles.tab} {...tabProps} display="flex">
      {isSelected ? "😎" : "😐"}
      {tabProps.children}
    </Button>
  );
});

export default function CustomTabs() {
  return (
    <Tabs textAlign="center">
      <TabList
        display="flex"
        flexDirection="row"
        justifyContent={{ base: "space-around", sm: "space-evenly" }}
      >
        <CustomTab>Como Palestrante</CustomTab>
        <CustomTab>Como Desenvolvedor</CustomTab>
        <CustomTab>Como Estudante</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel
          display="flex"
          flexDirection="column"
          alignItems="center"
          fontSize={17}
        >
          <Image
            src="./speaker.jpg"
            borderRadius="full"
            boxSize="200px"
            fallbackSrc="https://via.placeholder.com/150"
            objectFit="cover"
          />
          <Text as="b">Na Unijorge (Salvador):</Text>
          <Text>
            Monitorias semanais de lógica de programação durante um semestre
            (2023.1).
          </Text>
          <Text>HTML5 e CSS3: Crie seu primeiro site.</Text>
          <Text>Merge Sort: Entenda estrutura de dados de forma simples.</Text>
          <Text>ReactJs: Criando seu primeiro WebApp (Parte 1 e 2).</Text>
          <Text>ReactJs: Gerenciamento de Estado com Redux.</Text>
          <Text>
            NodeJs: Criando um API de upload de imagens utilizando o MongoDB.
          </Text>
          <Text as="b">Na Unijorge (Camaçari):</Text>
          <Text>Lógica de Programação: Iniciando no mundo da programação.</Text>
        </TabPanel>
        <TabPanel
          display="flex"
          flexDirection="column"
          alignItems="center"
          fontSize={17}
        >
          <Image
            src="./developer.jpg"
            borderRadius="full"
            boxSize="200px"
            fallbackSrc="https://via.placeholder.com/150"
            objectFit="cover"
          />
          <Text as="b">Desenvolvedor Full-Stack</Text>
          <Text mb={2} mx={20}>
            Atualmente trabalhando com os frameworks mais avançados do mercado
            web. Utilizando <b>Typescript</b> como linguagem principal para o
            desenvolvimento de aplicações web complexas e dinâmicas. Além de
            <b> APIs</b> que permitem a comunicação o lado do cliente e
            servidor. Desdes frameworks podem ser citados <b>Next.js</b> e{" "}
            <b>Nest.js</b>. Sigo aprofundando meus estudos, buscando entender
            mais sobre
            <b> arquitetura de software</b>, <b>GraphQL</b>, <b>RabbitMQ</b> e{" "}
            <b>Kafka</b>.
          </Text>
        </TabPanel>
        <TabPanel ml={2} fontSize={17}>
          <Text as="b">Cientista da Computação! (quase)</Text>
          <Text>
            Graduando em Ciência da Computação, atualmente no 4° semestre.
          </Text>
          <Text>
            Ex-Monitor na Matéria de <b>Desenvolvimento Web.</b>
          </Text>
          <Text mx={20}>
            Participante em iniciação científica sobre análise de dados usando{" "}
            <b>aprendizado de máquina</b>: Tive a oportunidade de me envolver na
            análise de dados, explorando o uso de machine learning para tornar o
            processo de análise mais eficiente. Utilizamos técnicas como{" "}
            <b>clustering</b> e <b>árvore de decisão</b> no desenvolvimento do
            projeto de pesquisa.
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
