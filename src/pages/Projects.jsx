import { Box } from "@chakra-ui/react";

import Project from "../components/Project";
import skills from "../utils/skills";

import learnMore from '../assets/learnMore.png';
import dacti from '../assets/dacti.png';
import passwordManager from '../assets/passwordManager.png';
import crudSpringBoot from '../assets/crudSpringBoot.png';
import portfolioV2 from '../assets/portfolioV2.png';
import zipCodeFinder from '../assets/zipCodeFinder.png';
import thumbnailDownloader from '../assets/thumbnailDownloader.png';
import mentalHealthApp from '../assets/mentalHealthApp.png';
import inventoryControl from '../assets/inventoryControl.png';
import financeSystemApi from '../assets/financeSystemApi.png';
import qCoder from '../assets/qCoder.png';
import reactNativeGuide from '../assets/reactNativeGuide.png';

export default function Projects() {

  const img = {
    reactNativeGuide,
    qCoder,
    financeSystemApi,
    inventoryControl,
    mentalHealthApp,
    thumbnailDownloader,
    zipCodeFinder,
    portfolioV2,
    crudSpringBoot,
    passwordManager,
    dacti,
    learnMore
  }

  const desc = {
    reactNativeGuide: "A beginner's guide to React Native for those who want to start with the framework. React Native was the first framework I worked with. Initially, I encountered some difficulties in understanding important topics like Async Storage and Redux Saga. I created this guide so that people don't feel as lost as I did when I started.",
    qCoder: 'A NPM lib with UI which generates a custom QR Code from any link provided by the user. Made in React.js.',
    financeSystemApi: 'A Finance system REST Api in Golang using continuous integration with Circle CI, using MVC architecture.',
    inventoryControl: 'An app for inventory management of any desired product by the user, built using Next.js with Chakra-UI.',
    mentalHealthApp: 'An initial prototype of a mental health-related application that I am developing. Built using React Native and Styled Components.',
    thumbnailDownloader: 'A website that generates a thumbnail from a link and provides it for download, built using Python and the Flask framework.',
    zipCodeFinder: 'A zip code finder. The user puts your postal code info and the system returns information about it.',
    portfolioV2: 'My old portfolio. Made with ReactJs, it is my 2.0 version of portfolio. (this is 3.0.).',
    crudSpringBoot: 'The User Management System is a robust Java Spring Boot application designed to streamline the management of user data within an organization. This project implements a full-fledged CRUD (Create, Read, Update, Delete) functionality for user entities, offering a secure and efficient way to handle user information.',
    passwordManager: 'A Simple Password Manager made in Python. It is not yet at the production level.',
    dacti: 'DacTI is my project that commercializes websites and IT projects in general, at an affordable price!',
    learnMore: "Learn More: Simplify Your Learning. Learn quickly with direct contact with teachers.Front-end built in ReactJs, Back-end developed in NodeJs, PostgreSQL database. Relationships have been established between the entities professor and publications (so that professors can have publications) and professor and subjects (so that the professor can teach one or more subjects). Both relationships are '1:n'. Redux is used to persist the login of the coordinator's administrator."
  }

  const links = {
    reactNativeGuide: 'https://github.com/marcelldac/react-native-guide',
    qCoder: 'https://www.npmjs.com/package/q-coder',
    financeSystemApi: 'https://github.com/marcelldac/finance-system-api',
    inventoryControl: 'https://inventory-control-nextjs-p4myb0qy6-marcelldac.vercel.app/',
    mentalHealthApp: '',
    thumbnailDownloader: 'https://github.com/marcelldac/thumbnail-downloader',
    zipCodeFinder: 'https://github.com/marcelldac/zip-code-finder',
    portfolioV2: 'https://github.com/marcelldac/portfolio',
    crudSpringBoot: 'https://github.com/marcelldac/crud_usuarios',
    passwordManager: 'https://github.com/marcelldac/password-generator',
    dacti: 'https://dacti-xi.vercel.app/',
    learnMore: 'https://github.com/marcelldac/client_learn_more_system'
  }

  return (
    <Box m={30}>
      <Project title='Learn More' src={img.learnMore} description={desc.learnMore} skills={[skills.javascript, skills.react_js, skills.node, skills.postgresql]} link={links.learnMore} />
      <Project title='DacTI Project' src={img.dacti} description={desc.dacti} skills={[skills.javascript, skills.react_js]} link={links.dacti} />
      <Project title="Password Manager" src={img.passwordManager} description={desc.passwordManager} skills={[skills.python]} link={links.passwordManager} />
      <Project title="Users CRUD" src={img.crudSpringBoot} description={desc.crudSpringBoot} skills={[skills.java, skills.spring_boot]} link={links.crudSpringBoot} />
      <Project title='My Portfolio v2.0' src={img.portfolioV2} description={desc.portfolioV2} skills={[skills.javascript, skills.react_js]} link={links.portfolioV2} />
      <Project title='Zip Code Finder' src={img.zipCodeFinder} description={desc.zipCodeFinder} skills={[skills.javascript, skills.react_js]} link={links.zipCodeFinder} />
      <Project title='React Native Guide' src={img.reactNativeGuide} description={desc.reactNativeGuide} skills={[skills.react_native, skills.javascript]} link={links.reactNativeGuide} />
      <Project title='Q-Coder NPM Package' src={img.qCoder} description={desc.qCoder} skills={[skills.typescript, skills.react_js]} link={links.qCoder} />
      <Project title='Finance System API' src={img.financeSystemApi} description={desc.financeSystemApi} skills={[skills.golang]} link={links.financeSystemApi} />
      <Project title='Inventory Control System' src={img.inventoryControl} description={desc.inventoryControl} skills={[skills.javascript, skills.nextjs, skills.chakraui]} link={links.inventoryControl} />
      <Project title='React Native Health App' src={img.mentalHealthApp} description={desc.mentalHealthApp} skills={[skills.javascript, skills.react_native]} link={links.mentalHealthApp} />
      <Project title='Thumbnail Downloader' src={img.thumbnailDownloader} description={desc.thumbnailDownloader} skills={[skills.python, skills.flask]} link={links.thumbnailDownloader} />
    </Box>
  )
}