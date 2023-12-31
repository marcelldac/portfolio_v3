import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Project from '../components/Project';

import skills from '../utils/skills';

import learnMore from '../assets/learnMore.png';
import dacti from '../assets/dacti.png';
import crudSpringBoot from '../assets/crudSpringBoot.png';
import thumbnailDownloader from '../assets/thumbnailDownloader.png';
import mikeshelp from '../assets/mikeshelp.png';
import qCoder from '../assets/qCoder.png';
import reactNativeGuide from '../assets/reactNativeGuide.png';
import numberIdentifier from '../assets/numberIdentifier.png';
import suCelso from '../assets/suCelso.png';
import schedule from '../assets/schedule.png';

export default function Projects() {

    const img = {
        reactNativeGuide,
        qCoder,
        mikeshelp,
        thumbnailDownloader,
        crudSpringBoot,
        dacti,
        learnMore,
        numberIdentifier,
        suCelso,
        schedule,
    }

    const desc = {
        reactNativeGuide: 'Um guia para iniciantes em React Native para aqueles que desejam começar com o framework. React Native foi o primeiro framework com o qual trabalhei. Inicialmente, encontrei algumas dificuldades para entender tópicos importantes como o Async Storage e o Redux Saga. Criei este guia para que as pessoas não se sintam tão perdidas quanto eu me senti quando comecei.',
        qCoder: 'Uma biblioteca NPM com interface de usuário que gera um código QR personalizado a partir de qualquer link fornecido pelo usuário. Feita em Typescript. Uma biblioteca NPM é uma forma de compartilhar código em JavaScript com outros desenvolvedores, permitindo que eles usem essa funcionalidade em seus próprios projetos. Nesse caso, a biblioteca possui uma interface de usuário construída com React.js e tem a capacidade de criar códigos QR personalizados a partir de URLs fornecidas pelos usuários. Isso pode ser útil em diversos contextos, como aplicativos móveis, sites ou qualquer aplicação que necessite de geração de QR codes a partir de links fornecidos dinamicamente.',
        mikeshelp: 'Um protótipo inicial de um aplicativo relacionado à saúde mental, Atualmente em processo de desenvolvimento.',
        thumbnailDownloader: 'Um site que gera uma thumbnail a partir de um link e a disponibiliza para download, construído usando Python e o framework Flask.',
        crudSpringBoot: 'O Sistema de Gerenciamento de Usuários é uma aplicação Java Spring Boot robusta projetada para simplificar o gerenciamento de dados de usuário dentro de uma organização. Este projeto implementa uma funcionalidade completa de CRUD (Criar, Ler, Atualizar, Excluir) para a entidade de usuário, oferecendo uma maneira segura e eficiente de lidar com informações de usuário.',
        dacti: 'DacTI é o meu projeto que comercializa websites e projetos de TI em geral, a preços acessíveis!',
        learnMore: "Aplicação Back-end desenvolvida em NodeJs, utiliza o banco de dados PostgreSQL. Foram estabelecidos relacionamentos entre as entidades professor e publicações (para que os professores possam ter publicações) e professor e disciplinas (para que o professor possa ensinar uma ou mais disciplinas). Ambos os relacionamentos são de '1 para muitos' (1:n).",
        numberIdentifier: 'Um projeto que identifica a localização e operadora do número digitado pelo usuário.',
        suCelso: 'Um projeto acadêmico que simula uma interface funcional de uma escola. Com relacionamentos entre entidades como turmas, professores e cursos. Similar ao projeto Learn More.',
        schedule: 'Meu primeiro projeto como freelancer. Se trata de uma agenda, onde o usuário pode criar, atualizar e deletar eventos incluindo nome, data, assunto e observação',
    }

    /* 
        Em caso de projetos com front-end e back-end em repositorios separados, 
        colocar primeiro o link do front-end e depois o link do back-end 
    */
    const links = {
        reactNativeGuide: 'https://github.com/marcelldac/react-native-guide',
        qCoder: 'https://www.npmjs.com/package/q-coder',
        mikeshelp: '',
        thumbnailDownloader: 'https://github.com/marcelldac/thumbnail-downloader',
        crudSpringBoot: 'https://github.com/marcelldac/crud_usuarios',
        dacti: 'https://dacti-xi.vercel.app/',
        learnMore: 'https://github.com/marcelldac/server_learn_more_system',
        numberIdentifier: 'https://github.com/marcelldac/number_identifier',
        suCelso: 'https://github.com/marcelldac/server_sucelso_system',
        schedule: '',
    }

    const sla = () => { console.log(links.suCelso.length) };
    sla();

    return (
        <Box m={30}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Project title='SuCelso School' src={img.suCelso} description={desc.suCelso} skills={[skills.javascript, skills.react_js, skills.node, skills.mysql]} link={links.suCelso} />
                <Project title='Learn More' src={img.learnMore} description={desc.learnMore} skills={[skills.javascript, skills.react_js, skills.node, skills.postgresql]} link={links.learnMore} />
                <Project title='DacTI' src={img.dacti} description={desc.dacti} skills={[skills.javascript, skills.react_js]} link={links.dacti} />
                <Project title="CRUD De Usuários" src={img.crudSpringBoot} description={desc.crudSpringBoot} skills={[skills.java, skills.spring_boot]} link={links.crudSpringBoot} />
                <Project title='Guia para React Native' src={img.reactNativeGuide} description={desc.reactNativeGuide} skills={[skills.react_native, skills.javascript]} link={links.reactNativeGuide} />
                <Project title='Biblioteca Q-Coder' src={img.qCoder} description={desc.qCoder} skills={[skills.typescript, skills.react_js]} link={links.qCoder} />
                <Project title='MikesHelp' src={img.mikeshelp} description={desc.mikeshelp} skills={[skills.javascript, skills.react_native]} link={links.mikeshelp} />
                <Project title='Downloader de Thumbnails' src={img.thumbnailDownloader} description={desc.thumbnailDownloader} skills={[skills.python, skills.flask]} link={links.thumbnailDownloader} />
                <Project title='Identificador de Número' src={img.numberIdentifier} description={desc.numberIdentifier} skills={[skills.python]} link={links.numberIdentifier} />
                <Project title='Agenda de encontros' src={img.schedule} description={desc.schedule} skills={[skills.python]} link={links.schedule} />
            </motion.div>
        </Box>
    )
}
